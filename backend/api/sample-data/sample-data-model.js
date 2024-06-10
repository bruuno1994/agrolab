const Sequelize = require('sequelize');
const database = require('../../config/db');
const Sample = require('../sample/sample-model');

const SampleData = database.sequelize.define('SampleData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id' //nome do atributo do banco
    },
    sample_id: {
        type: Sequelize.INTEGER,
        field: 'sample_id',
        allowNull: false,
        references: {
            model: 'tb_sample',
            key: 'id'
        }
    },
    sensor_temperature: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        field: 'sensor_temperature'
    },
    sensor_humidity: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        field: 'sensor_humidity'
    },
    sensor_soil: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        field: 'sensor_soil'
    },
    lumen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'lumen'
    },
    creation_date: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'creation_date'
    }
}, {
    timestamps: false,
    tableName: 'tb_sample_data' //nome da tabela banco
});

SampleData.belongsTo(Sample, {foreignKey: 'sample_id'});

module.exports = SampleData;