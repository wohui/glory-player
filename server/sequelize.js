/**
 * Sequelize实例化
 * @type {Sequelize}
 */

const Sequelize = require('sequelize');
const config_db = require('./config/config_db');
const sequelize = new Sequelize(config_db.database, config_db.user, config_db.password, {
    host: config_db.host,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'
});
module.exports = sequelize;