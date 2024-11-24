@echo off
mkdir ssl 2>nul

docker run --rm -v %cd%/ssl:/certificates alpine/openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /certificates/server.key -out /certificates/server.crt -subj "/CN=localhost"

echo Certificados generados en la carpeta ssl/
