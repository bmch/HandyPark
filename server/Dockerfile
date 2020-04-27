
FROM node:alpine                  
RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app
COPY package*.json ./	
RUN npm install
COPY . .
RUN npm install 
EXPOSE 3001
CMD [ "node", "index.js" ]