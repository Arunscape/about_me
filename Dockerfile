FROM docker.io/rustlang/rust:nightly-slim as builder
WORKDIR /app
#RUN apk add libc-dev npm
RUN apt-get update && apt-get install -y npm
RUN cargo install trunk
COPY .cargo .cargo
COPY rust-toolchain.toml rust-toolchain.toml
COPY src src
COPY fonts fonts
COPY images images
COPY build.rs build.rs
COPY tailwind.config.js tailwind.config.js
COPY tailwind.css tailwind.css
COPY index.scss index.scss
COPY index.html index.html
COPY Cargo.lock Cargo.lock
COPY Cargo.toml Cargo.toml
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
RUN trunk build --release


FROM docker.io/nginx:mainline-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
