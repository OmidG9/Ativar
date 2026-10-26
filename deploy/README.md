# استقرار و اکشن رانر (Ativar)

این مستند فرض می‌کند سرور **Ubuntu/Debian** است و رانر اختصاصی روی همان سروری نصب می‌شود که سایت روی آن اجرا می‌شود.

معماری:

- رانر self-hosted با برچسب `Ativar` روی سرور نصب می‌شود.
- هر push به `main` ابتدا lint/typecheck/test/build را اجرا می‌کند، بعد ایمیج داکر را می‌سازد و smoke test می‌گیرد و در پایان با `docker compose` ایمیج را روی پورت `4646` بالا می‌آورد.
- فایل رمزها بیرون از ریپو است (`/etc/ativar/ativar.env`) تا `actions/checkout` آن را پاک نکند.

---

## ۱) پیش‌نیازهای سرور

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl git jq

# Docker Engine + Compose plugin
curl -fsSL https://get.docker.com | sudo sh
sudo apt-get install -y docker-compose-plugin

# اجازه استفاده از داکر بدون sudo (بعد از این دستور دوباره وارد شوید)
sudo usermod -aG docker "$USER"

docker --version
docker compose version   # باید 2.24 یا بالاتر باشد
```

> Compose باید حداقل `2.24` باشد، چون در `docker-compose.yml` از `required: false` برای فایل env استفاده شده است.

---

## ۲) فایل متغیرهای محیطی

فایل `.env.example` را به مسیر بیرون از ریپو کپی کنید و مقادیر واقعی را بگذارید:

```bash
sudo install -d -m 750 /etc/ativar
sudo cp .env.example /etc/ativar/ativar.env
sudo nano /etc/ativar/ativar.env

sudo chown "$USER" /etc/ativar/ativar.env
sudo chmod 600 /etc/ativar/ativar.env
```

مقادیری که باید پر شوند (هر کدام که فعال است):

- `TELEGRAM_BOT_TOKEN` و `TELEGRAM_CHAT_ID`
- `RESEND_API_KEY`، `CONTACT_TO_EMAIL` و `CONTACT_FROM_EMAIL`
- `CONTACT_WEBHOOK_URL` (اختیاری)
- `NEXT_PUBLIC_ANALYTICS_SRC`، `NEXT_PUBLIC_ANALYTICS_DOMAIN` و `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (اختیاری)

> `NEXT_PUBLIC_*` در زمان build داخل ایمیج ثابت می‌شود؛ بنابراین باید در همین فایل باشد. بقیه مقادیر در زمان اجرا به کانتینر تزریق می‌شوند.

---

## ۳) نصب اکشن رانر

### گرفتن توکن ثبت رانر

توکن حدود یک ساعت اعتبار دارد و هر بار باید تازه گرفته شود.

با GitHub CLI:

```bash
gh auth login
REPO=OWNER/REPO
TOKEN=$(gh api -X POST "repos/$REPO/actions/runners/registration-token" --jq .token)
```

یا از مسیر: **Repository → Settings → Actions → Runners → New self-hosted runner**.

### اجرای اسکریپت نصب

```bash
git clone https://github.com/OWNER/REPO.git ~/ativar
cd ~/ativar

REPO_URL=https://github.com/OWNER/REPO \
REGISTRATION_TOKEN="$TOKEN" \
RUNNER_NAME=ativar-runner \
LABELS=Ativar \
bash deploy/setup-runner.sh
```

اسکریپت نسخهٔ latest رانر را با معماری درست (`x64`/`arm64`/`arm`) دانلود می‌کند، وابستگی‌های سیستمی را نصب می‌کند، رانر را با برچسب `Ativar` ثبت می‌کند و به‌صورت سرویس systemd راه می‌اندازد.

### بررسی وضعیت

```bash
cd ~/actions-runner
sudo ./svc.sh status

# نام سرویس چیزی شبیه این است:
sudo journalctl -u 'actions.runner.*' -f
```

در **Settings → Actions → Runners** باید رانر با وضعیت **Idle** و برچسب `Ativar` دیده شود.

> اگر بعداً برچسب اضافه کردید، مثلاً `LABELS=Ativar,docker`، ورک‌فلو فقط به `Ativar` نیاز دارد و بقیه برچسب‌ها اختیاری‌اند.
>
> `setup-runner.sh` برای Linux است. اگر سرور ویندوز شد، از مستند رسمی GitHub برای `config.cmd` استفاده کنید و همان `--labels Ativar` را بدهید.

---

## ۴) استقرار دستی (بدون CI)

```bash
cd ~/ativar
git pull

ENV_FILE=/etc/ativar/ativar.env bash deploy/deploy.sh
```

اسکریپت ایمیج را می‌سازد، کانتینر را بالا می‌آورد و تا healthy شدن صبر می‌کند. برای فقط ری‌استارت بدون build:

```bash
NO_BUILD=1 ENV_FILE=/etc/ativar/ativar.env bash deploy/deploy.sh
```

بررسی سریع:

```bash
docker compose --env-file /etc/ativar/ativar.env ps
curl -fsS http://127.0.0.1:4646/api/health
docker logs -f ativar-web
```

---

## ۵) استقرار خودکار

بعد از push روی `main`:

1. **quality** → `npm ci`، lint، typecheck، test و build
2. **docker** → ساخت ایمیج موقت `ativar-website:ci-<run-id>` و smoke test روی `/api/health`
3. **deploy** → اجرای `deploy/deploy.sh` (build + `docker compose up -d` + انتظار برای healthy) و بررسی نهایی `/api/health`

تنظیمات مرتبط:

| مورد | مقدار |
| --- | --- |
| برچسب رانر در ورک‌فلو | `runs-on: [self-hosted, Ativar]` |
| مسیر فایل env | `/etc/ativar/ativar.env` |
| متغیر ریپو برای تغییر مسیر env | `ATIVAR_ENV_FILE` (Settings → Secrets and variables → Actions → Variables) |
| پورت سرویس | `4646` (داخل کانتینر `3000`) |

> تمام مقادیر build-time (`NEXT_PUBLIC_ANALYTICS_SRC`، `NEXT_PUBLIC_ANALYTICS_DOMAIN` و `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) هم باید در همان `/etc/ativar/ativar.env` باشند؛ چون job استقرار ایمیج نهایی را با `--env-file` همان فایل می‌سازد.

> اگر روی `main` چند push پشت سر هم بزنید، deployها queue می‌شوند و هم‌زمان اجرا نمی‌شوند (`concurrency: ativar-production`).

---

## ۶) اجرای محلی با داکر

```bash
cp .env.example .env.production   # مقادیر را پر کنید
docker compose --env-file .env.production up -d --build
curl -fsS http://127.0.0.1:4646/api/health
docker compose --env-file .env.production down
```

---

## ۷) عیب‌یابی

| علامت | راه‌حل |
| --- | --- |
| `permission denied ... docker.sock` | `sudo usermod -aG docker "$USER"` و بعد `sudo ./svc.sh restart` (یا خروج/ورود دوباره) |
| رانر در GitHub آفلاین است | `sudo ./svc.sh status` و `sudo journalctl -u 'actions.runner.*' -e` |
| `Env file ... not found` در deploy | فایل `/etc/ativar/ativar.env` را بسازید یا مقدار `ATIVAR_ENV_FILE` را درست کنید |
| کانتینر unhealthy می‌شود | `docker compose --env-file /etc/ativar/ativar.env logs --tail=100 web` |
| `port is already allocated` | `ss -ltnp \| grep 4646` و سرویس قدیمی را متوقف کنید |
| `required` ناشناخته در compose | نسخه Compose قدیمی است؛ `docker-compose-plugin` را به‌روزرسانی کنید |
| build به اینترنت نیاز دارد | `npm ci` و pull شدن base image داخل build انجام می‌شود؛ دسترسی خروجی سرور را بررسی کنید |

---

## ۸) نکات امنیتی

- رانر self-hosted را فقط برای ریپوی خصوصی یا شاخه‌های همین ریپو استفاده کنید. اجرای PR خارجی (fork) یعنی اجرای کد ناشناس روی سرور؛ به همین دلیل در ورک‌فلو PRهای fork رد می‌شوند.
- رانر را در سطح Repository ثبت کنید، نه Organization، مگر اینکه واقعاً لازم است.
- رمزها فقط در `/etc/ativar/ativar.env` با دسترسی `600` نگه داشته شوند و هیچ‌وقت commit نشوند.
- توکن ثبت رانر کوتاه‌عمر است؛ آن را در تاریخچه شل یا فایل ذخیره نکنید.
- اگر سایت را پشت Nginx/Caddy می‌برید، در `docker-compose.yml` پورت را به `127.0.0.1:4646:3000` تغییر دهید تا فقط از روی خود سرور در دسترس باشد.
