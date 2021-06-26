const sequelize = require('./index');
const { DataTypes, Sequelize } = require('sequelize');

const user = sequelize.define('user', {
    uid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    facebookID: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
})

module.exports = user;