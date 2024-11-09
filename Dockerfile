# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript files into the dist directory
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Command to run the application in production
CMD ["node", "dist/index.js"]  # Point to the entry point in the "dist" folder
