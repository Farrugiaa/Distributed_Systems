FROM denoland/deno:alpine-1.42.1

WORKDIR /app

COPY . .

RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]
