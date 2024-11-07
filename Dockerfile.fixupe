# Use a lightweight base image with Node.js pre-installed
FROM node:20-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json initially to leverage caching during build
COPY package*.json ./

# Install dependencies (in build stage)
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application (or your app)
RUN npm run build

# Use a smaller production image
FROM node:20-alpine AS production

# Set working directory in the production image
WORKDIR /app

# Pass environment variable (if not set by the deployment environment)
ARG BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${BASE_URL}

# Copy the built application from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Copy only the necessary node_modules, package.json, and other necessary files
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Optionally, install production dependencies (this can be skipped if node_modules is copied)
# RUN npm install --only=production --frozen-lockfile

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
