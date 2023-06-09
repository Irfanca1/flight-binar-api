const { Sequelize } = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
