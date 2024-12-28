# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g

# Copy the application source code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
