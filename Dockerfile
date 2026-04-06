# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies (only copy exactly what is needed for install)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
