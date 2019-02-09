FROM node:8.15.0-jessie
ENV MONGOURL mongodb://viter.dk/social_net
COPY . /root
WORKDIR /root
RUN npm i -g typescript
RUN npm install
RUN tsc
CMD ["npm", "start"]
