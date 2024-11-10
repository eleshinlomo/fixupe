# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build
RUN npm run export

# Production stage (Nginx serving static site)
FROM nginx:alpine AS production

COPY --from=build /app/out /usr/share/nginx/html

# Copy the Nginx config if you have one (optional)
COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
