#Node.js version is 20. Alpine - lightweight version of linux.
FROM node:20-alpine

#setting the working folder in the container
WORKDIR /app

#just copy your package.json and package-lock.json.  ./ - means copying inside your current working folder(directory)
COPY package*.json ./

#ci - clean install. everywhere(ur comp, in Docker, on server) the same version of packets. --only=production installs only critical and needed dependencies, excluding devDependencies.
RUN npm ci --only=production

COPY ./src ./
# The real port listener is in the file index.js. This is just a hint for tools and people
EXPOSE 1000

CMD ["node", "index.js"]
