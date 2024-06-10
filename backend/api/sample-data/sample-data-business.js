const sampleDataRepository = require('./sample-data-repository');

const create = async (sampleData) => {
    return sampleDataRepository.save(sampleData);
};

const list = async (filter) => {
    return sampleDataRepository.findAll(filter);
};

const findBySampleId = async (id) => {
    return sampleDataRepository.findBySampleId(id);
};

const deleteBySampleId = async (id) => {
    return sampleDataRepository.deleteBySampleId(id);
};

module.exports = {
    create,
    list,
    findBySampleId,
    deleteBySampleId
};