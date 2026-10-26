#!/usr/bin/env bash
# Install (or reconfigure) a GitHub Actions self-hosted runner on a Linux server
# and register it with the label used by this repo's workflow: Ativar
#
# Usage:
#   REPO_URL=https://github.com/OWNER/REPO \
#   REGISTRATION_TOKEN=<token> \
#   ./deploy/setup-runner.sh
#
# Optional:
#   RUNNER_NAME=ativar-runner
#   RUNNER_DIR=$HOME/actions-runner
#   LABELS="Ativar"                 # comma-separated, e.g. "Ativar,docker"
#   RUNNER_VERSION=<x.y.z>          # default: latest release
#
# Get a registration token (valid ~1 hour):
#   gh api -X POST repos/OWNER/REPO/actions/runners/registration-token --jq .token
# or: Repository settings -> Actions -> Runners -> New self-hosted runner
#
# Requirements: curl, tar, git, sudo (for the systemd service), Docker access.
set -euo pipefail

: "${REPO_URL:?set REPO_URL, e.g. REPO_URL=https://github.com/OWNER/REPO}"
: "${REGISTRATION_TOKEN:?set REGISTRATION_TOKEN from the GitHub UI or gh api}"

RUNNER_NAME="${RUNNER_NAME:-ativar-runner}"
RUNNER_DIR="${RUNNER_DIR:-$HOME/actions-runner}"
LABELS="${LABELS:-Ativar}"
RUNNER_VERSION="${RUNNER_VERSION:-}"
WORK_FOLDER="${WORK_FOLDER:-_work}"

case "$(uname -m)" in
  x86_64 | amd64) ARCH="x64" ;;
  aarch64 | arm64) ARCH="arm64" ;;
  armv7l) ARCH="arm" ;;
  *)
    echo "error: unsupported architecture: $(uname -m)" >&2
    exit 1
    ;;
esac

if [ -z "$RUNNER_VERSION" ]; then
  RUNNER_VERSION="$(curl -fsSL https://api.github.com/repos/actions/runner/releases/latest \
    | sed -n 's/.*"tag_name": *"v\([^"]*\)".*/\1/p' | head -n1)"
fi
[ -n "$RUNNER_VERSION" ] || { echo "error: could not resolve runner version" >&2; exit 1; }

TARBALL="actions-runner-linux-${ARCH}-${RUNNER_VERSION}.tar.gz"
URL="https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/${TARBALL}"

echo "==> Runner ${RUNNER_VERSION} (${ARCH}) -> ${RUNNER_DIR}"
mkdir -p "$RUNNER_DIR"
cd "$RUNNER_DIR"

if [ ! -x ./config.sh ]; then
  echo "==> Downloading ${URL}"
  curl -fL -o "$TARBALL" "$URL"
  tar xzf "$TARBALL"
  rm -f "$TARBALL"
fi

# OS libraries required by the runner (libicu, etc.)
echo "==> Installing runner dependencies"
sudo ./bin/installdependencies.sh

if [ -f .runner ]; then
  echo "==> Existing runner configuration found; removing it before re-registering"
  sudo ./svc.sh stop || true
  sudo ./svc.sh uninstall || true
  ./config.sh remove --token "$REGISTRATION_TOKEN" || true
fi

echo "==> Configuring runner '${RUNNER_NAME}' with labels: ${LABELS}"
./config.sh \
  --url "$REPO_URL" \
  --token "$REGISTRATION_TOKEN" \
  --name "$RUNNER_NAME" \
  --labels "$LABELS" \
  --work "$WORK_FOLDER" \
  --unattended \
  --replace

if ! id -nG "$(id -un)" | tr ' ' '\n' | grep -qx docker; then
  echo "warning: $(id -un) is not in the docker group; CI cannot run docker commands." >&2
  echo "         run: sudo usermod -aG docker $(id -un)  (then log in again)" >&2
fi

echo "==> Installing as a systemd service"
sudo ./svc.sh install "$(id -un)"
sudo ./svc.sh start
sudo ./svc.sh status || true

cat <<EOF

Done. Verify in: ${REPO_URL}/settings/actions/runners
The workflow in this repo targets: runs-on: [self-hosted, ${LABELS%%,*}]
EOF
