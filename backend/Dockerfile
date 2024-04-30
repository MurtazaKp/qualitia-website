FROM node:18.12.1-alpine
RUN apk add g++ make python3
WORKDIR /app
COPY . .
RUN yarn install
# npm install --legacy-peer-deps
EXPOSE 1337
CMD ["yarn", "develop"]
#CMD ["npm ", "run", "develop"]