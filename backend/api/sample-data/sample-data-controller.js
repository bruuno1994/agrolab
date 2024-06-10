const business = require('./sample-data-business');
const sampleBusiness = require('../sample/sample-business')

const createSampleData = async (request, h) => {
    const { payload } = request;

    try {
        if (!payload.sample || !payload.sample.id) {
            throw new Error('Invalid sample_id');
        }
        payload.sample_id = payload.sample.id;
        const result = await business.create(payload);
        return h.response(result).code(201);
    } catch (error) {
        console.error(error);
        if (error.message === 'Invalid sample_id') {
            return h.response({ error: 'Invalid sample_id' }).code(400);
        }
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const getSampleData = async (request, h) => {
    const { query } = request;
    const result = await business.list(query);
    return h.response(result).code(200);
};

const getSampleDataByIdSample = async (request, h) => {    
    const { id } = request.params;
    
    try {
        const result = await business.findBySampleId(id);
        if (!result) {
            return h.response({ error: 'Sample data not found' }).code(404);
        }
        return h.response(result).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const deleteBySampleId = async (request, h) => {
    const sampleId = request.params.id;    
    try {
        const result = await sampleBusiness.findById(sampleId);        
        if (result) {
            try {
                await business.deleteBySampleId(sampleId);
                return h.response('Sample data was deleted').code(200);
            } catch (error) {
                return h.response({ error: 'Internal Server Error' }).code(500);
            }
        } else {
            return h.response({ error: 'Sample not found' }).code(404);
        }
    } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

module.exports = {
    getSampleData,
    createSampleData,
    getSampleDataByIdSample,
    deleteBySampleId
};