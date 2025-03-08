# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all backend files (server.js)
COPY . .

# Expose the port Express runs on
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
