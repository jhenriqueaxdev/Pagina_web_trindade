# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Copie também a pasta public 👇
COPY package.json package-lock.json* ./
COPY tsconfig.json vite.config.ts postcss.config.* tailwind.config.js ./
COPY index.html ./
COPY public ./public
COPY src ./src

# Instalar deps e build
RUN npm ci
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# (se seu nginx.conf escuta 8080, troque para EXPOSE 8080)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
