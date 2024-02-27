#

## Technology

- ExpressJS
- SQLite3

## Structure

- config: read config from env
- controller
- service: handle logic for controller
- middleware:
- model:
- pkg: contain package like: database, ...
- repository: handle query to database
- test: test folder

## How to run

- Install all node package `npm install`
- Create `.env` file base on `.env.example`
- Run the server `node main.js`
