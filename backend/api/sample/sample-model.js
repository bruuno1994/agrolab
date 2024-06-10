const Sequelize = require('sequelize');
const database = require('../../config/db');

const Sample = database.sequelize.define('Sample', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id' //nome do atributo do banco
    },
    sample_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'sample_name'
    },
    name_responsible: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_responsible'
    }
}, {
    timestamps: false,
    tableName: 'tb_sample' //nome da tabela banco
});

module.exports = Sample;