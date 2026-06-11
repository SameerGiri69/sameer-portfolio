# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

# Install openssh for Render SSH access
RUN apk add --no-cache openssh

# Copy built files from build stage to nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Setup SSH directory
RUN mkdir -p /root/.ssh && chmod 0700 /root/.ssh

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]