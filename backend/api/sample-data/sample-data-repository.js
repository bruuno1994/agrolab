const sampleDataModel = require('./sample-data-model');
const { Op } = require('sequelize');
const Sample = require('../sample/sample-model')

const syncModel = async () => {
    await sampleDataModel.sync({ force: false }); //force: true para recriar a tabela a cada inicialização
};

const save = async (sampleData) => {
    await syncModel();
    return sampleDataModel.create(sampleData);
};

const findAll = async () => {

    return sampleDataModel.findAll({
        include: [{
            model: Sample,
            required: true //inner
        }]
    });
};

const findBySampleId = async (id) => {
    return sampleDataModel.findOne({
        where: { sample_id: id },
        include: [{
            model: Sample,
            required: true // inner join
        }]
    });
};

const deleteBySampleId = async (id) => {
    return sampleDataModel.destroy({
        where: {
            sample_id: id
        }
    });
};

module.exports = {
    save,
    findAll,
    findBySampleId,
    deleteBySampleId
};