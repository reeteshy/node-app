# Step 1: Use an official Node.js runtime as a parent image
FROM node:22

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install app dependencies in the container
RUN npm install

# Step 5: Copy the rest of the application to the container
COPY . .

# Step 6: Expose the port on which the app runs (e.g., 5000)
EXPOSE 5000

# Step 7: Define the command to run your app
CMD ["npm","run", "start"]
