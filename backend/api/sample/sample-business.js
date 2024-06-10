const repository = require('./sample-repository')

const create = async (sample) => {
    return repository.save(sample);
};

const list = async (filter) => {
    return repository.findAll(filter);
};

const findById = async (id) => {
    return repository.findById(id);
};

const findByName = async (name) => {
    return repository.findByName(name);
};

const updateName = async (id, name, responsible) => {
    return repository.updateName(id, name, responsible);
};

const deleteById = async (id) => {
    return repository.deleteById(id);
};

module.exports = {
    create,
    list,
    findById,
    findByName,
    updateName,
    deleteById
}