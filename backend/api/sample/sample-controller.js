const business = require('./sample-business');

const getSamples = async (request, h) => {
    
    const {query} = request;

    const result = await business.list(query);
    return h.response(result).code(200);
}

const create = async (request, h) => {
    
    try {
        const result = await business.create(request.payload);
        return h.response(result).code(201);
    } catch(error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
}

const findById = async (request, h) => {    
    const sampleId = request.params.id;
    const result = await business.findById(sampleId);
    if (result) {
        return h.response(result).code(200);
    } else {
        return h.response({ error: 'Sample not found' }).code(404);
    }
}

const findByName = async (request, h) => {
    const sampleName = request.query.sample_name; // Usando query para o nome
    const result = await business.findByName(sampleName);
    if (result.length > 0) {
        return h.response(result).code(200);
    } else {
        return h.response({ error: 'Sample not found' }).code(404);
    }
}

const updateName = async (request, h) => {
    const sampleId = request.params.id;
    const newName = request.payload.sample_name;
    const newResponsible = request.payload.name_responsible;
    const result = await business.updateName(sampleId, newName, newResponsible);
    if (result) {
        return h.response(result).code(200);
    } else {
        return h.response({ error: 'Sample not found' }).code(404);
    }
};

const deleteById = async (request, h) => {
    const sampleId = request.params.id;    
    try {
        const result = await business.findById(sampleId);        
        if (result) {
            try {
                await business.deleteById(sampleId);
                return h.response('Sample was deleted').code(200);
            } catch (error) {
                if (error.name === "SequelizeForeignKeyConstraintError") {
                    return h.response({error: "The Id still references in the table tb_sample_data. It's not possible delete!"}).code(400);
                } else {
                    return h.response({ error: 'Internal Server Error' }).code(500);
                }
            }
        } else {
            return h.response({ error: 'Sample not found' }).code(404);
        }
    } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

module.exports = {
    getSamples,
    create,
    findById,
    findByName,
    updateName,
    deleteById
};