# syntax=docker/dockerfile:1

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY build /usr/share/nginx/html/
RUN groupadd -g 2000 microservice && \
    useradd -u 1000 -g microservice -s /bin/bash microservice-user
USER 1000
CMD ["nginx", "-g", "daemon off;"]
