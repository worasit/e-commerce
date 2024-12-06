# e-commerce

Medusa JS

## Local Development Setup Guide

- 1.) Setup the local Postgres database via [docker-compose](docker-compose.yml) file
  ``` shell
    docker-compose up -d
  ```
- 2.) Create a new Medusa Admin User
  ```shell
    cd nongped
    npx medusa user -e admin@medusajs.com -p supersecret
  ```