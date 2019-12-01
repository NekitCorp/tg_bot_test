FROM node:latest

ENV BOT_TOKEN token
ENV SOCKS_HOST 138.68.68.72
ENV SOCKS_PORT 1080

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start" ]