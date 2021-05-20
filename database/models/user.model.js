const sequelize = require('./index');
const { DataTypes, Sequelize } = require('sequelize');

const user = sequelize.define('user', {
    uid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
})

module.exports = user;