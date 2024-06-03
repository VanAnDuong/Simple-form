FROM node:18.16-alpine3.16
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY
COPY . .

RUN npm install
EXPOSE 3000
CMD [ "node", "index.js"]