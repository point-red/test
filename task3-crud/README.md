## CRUD API using Express JS and Sequelize ORM

[**Express JS**](https://expressjs.com/)  or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

[**Sequelize ORM**](https://sequelize.org/) Sequelize is a promise-based Node. js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. Its features are solid transaction support, relations, eager and lazy loading, read replication and many more.


###  How to setting and run this Repository

- make sure the node JS and NPM is installed
- clone this repo as well as it must be
- Run `npm install` on your terminal in this project root directory
- copy file config.example.json with "config.json" and adjust your own Database setting inside it
- be prepared for the Database according to config.json
- run in you terminal `npm install --save sequelize mysql2` (or you can use another RDBMS)
- then run in you terminal `npm install -g sequelize-cli`
- Run `sequelize db:migrate` on your terminal (if you wanna copy the Database structure)
- Run `sequelize db:seed:all` on your terminal 
- Run `npm run dev` on your terminal (to run server)
