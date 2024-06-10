const Joi = require('joi');

const createSampleDataSchema = {
    payload: Joi.object({
        sample: Joi.object({
            id: Joi.number()
                    .integer()
                    .required()
        }),
        sensor_temperature: Joi.number()
                                .required(),
        sensor_humidity: Joi.number()
                            .required(),
        sensor_soil: Joi.number()
                        .required(),
        lumen: Joi.boolean()
                    .required(),
        creation_date: Joi.string()
                        .required()
    })
};

const getSampleDataSchema = {
    query: Joi.object({
        sample_id: Joi.number()
    })
};

const getBySampleId = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
            .description('The ID of the sample')
    })
};

const deleteBySampleId = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
            .description('The ID of the sample')
    })
}

module.exports = { createSampleDataSchema, getSampleDataSchema, getBySampleId, deleteBySampleId };