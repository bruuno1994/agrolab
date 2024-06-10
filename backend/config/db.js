const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'postgres',
    port: 5432,
    host: 'localhost',
    logging: console.log
};

//database, user, senha
const sequelize = new Sequelize('agrolab', 'postgres', 'admin', sequelizeConfig);

module.exports = {sequelize};