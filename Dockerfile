FROM node:9.5-alpine
MAINTAINER Petr Bugyík

ENV PROJECT_ROOT /src/apiary-cli
ENV PATH $PROJECT_ROOT/bin:$PATH

WORKDIR "$PROJECT_ROOT"

ADD package.json .
ADD package-lock.json .
RUN npm install --production && \
    npm cache --force clean

COPY . .

ENTRYPOINT ["apiary-cli"]
