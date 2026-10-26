#!/usr/bin/env bash
# Build and (re)start the production container on the server.
#
# Usage:
#   bash deploy/deploy.sh                 # build with cache, then restart
#   NO_BUILD=1 bash deploy/deploy.sh      # restart the already-built image
#   ENV_FILE=.env.staging bash deploy/deploy.sh
#
# Optional build-time values are read from ENV_FILE as well.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

ENV_FILE="${ENV_FILE:-.env.production}"
TAG="${TAG:-latest}"
export APP_ENV_FILE="$ENV_FILE"

COMPOSE=(docker compose --project-directory "$ROOT_DIR")
if [ -f "$ENV_FILE" ]; then
  COMPOSE+=(--env-file "$ENV_FILE")
else
  echo "warning: $ENV_FILE not found; runtime secrets will be missing." >&2
fi

if [ "${NO_BUILD:-0}" != "1" ]; then
  echo "==> Building ativar-website:${TAG}"
  TAG="$TAG" "${COMPOSE[@]}" build --pull
fi

echo "==> Starting container"
TAG="$TAG" "${COMPOSE[@]}" up -d --no-build --remove-orphans

echo "==> Waiting for the healthcheck"
CONTAINER_ID="$(TAG="$TAG" "${COMPOSE[@]}" ps -q web)"
STATUS="unknown"
for _ in $(seq 1 30); do
  STATUS="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$CONTAINER_ID" 2>/dev/null || echo unknown)"
  if [ "$STATUS" = "healthy" ]; then
    break
  fi
  if [ "$STATUS" = "unhealthy" ] || [ "$STATUS" = "exited" ] || [ "$STATUS" = "dead" ]; then
    break
  fi
  sleep 2
done

if [ "$STATUS" != "healthy" ]; then
  echo "error: container is ${STATUS}; recent logs:" >&2
  docker logs --tail 80 "$CONTAINER_ID" >&2 || true
  exit 1
fi

echo "==> Healthy: http://127.0.0.1:4646"
docker image prune -f >/dev/null
