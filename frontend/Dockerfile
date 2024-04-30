FROM node:18.12.1-alpine
RUN apk add g++ make python3
WORKDIR /app
COPY . .
RUN yarn install
#RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["yarn", "dev"]
#CMD ["npm", "run", "dev"]