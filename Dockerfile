# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose the app port and WebSocket port
EXPOSE 3000 24678

# Start the application
CMD ["npm", "run", "start"]
