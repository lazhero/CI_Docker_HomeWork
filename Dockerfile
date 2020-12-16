FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY Presentacion/package.json /app
COPY Presentacion/package-lock.json /app
RUN npm install
COPY /Presentacion /app
RUN npm run build
CMD ["npm", "start"]