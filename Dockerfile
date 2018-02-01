FROM node:8.9.4-alpine
RUN mkdir -p /app
COPY ./ /app
WORKDIR /app
ENV PORT=9090
EXPOSE 9090
ENTRYPOINT ["npm", "start" ]