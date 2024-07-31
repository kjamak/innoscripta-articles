# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Add the rest of the application code
COPY . ./

# Expose port (adjust if needed for your app)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
