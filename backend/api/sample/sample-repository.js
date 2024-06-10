const sampleModel = require('./sample-model');
const {Op} = require('sequelize');

const syncModel = async () => {
    await sampleModel.sync({ force: false }); //force: true para recriar a tabela a cada inicialização
};

const save = async (sample) => {
    await syncModel();
    return sampleModel.create(sample);
};

const findAll = async () => {
    return sampleModel.findAll();
};

const findById = async (id) => {
    return sampleModel.findOne({
        where: {
            id: id
        }
    })
};

const findByName = async (name) => {
    return sampleModel.findAll({
        where: {
            sample_name: {
                [Op.iLike]: `${name}%`
            }
        }
    });
};

const updateName = async (id, name, responsible) => {
    const [updatedRows] = await sampleModel.update({
        sample_name: name,
        name_responsible: responsible },
        {
        where: {
            id: id
        }
    });
    if (updatedRows > 0) {
        return await findById(id); // Retorna o sample atualizado
    }
    return null;
};

const deleteById = async (id) => {
    return sampleModel.destroy({
        where: {
            id: id
        }
    });
};

module.exports = {
    save,
    findAll,
    findById,
    findByName,
    updateName,
    deleteById
};