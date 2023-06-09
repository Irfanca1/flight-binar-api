'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {
  static associate(models) {
    // define association here
  }
}

User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    nomor_telepon: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Nama tabel di basis data
    timestamps: false, // Jika tidak menggunakan kolom createdAt dan updatedAt
  }
);

module.exports = User;
