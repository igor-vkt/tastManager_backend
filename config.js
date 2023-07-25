const Sequelize = require('sequelize');

const config = new Sequelize("taskmanager", "root", "XX66xt77", {dialect: 'mariadb'}); // (name of DB, username, password, dialect)

module.exports = config;