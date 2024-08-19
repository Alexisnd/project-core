const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectModule: require('mysql2')
})

module.exports = sequelize;
