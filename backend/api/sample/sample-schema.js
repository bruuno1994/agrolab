const Joi = require("joi");

const createSamplesSchema = {
    payload: Joi.object({
        sample_name: Joi
                .string()
                .min(3)
                .max(60)
                .required()
                .description('The name of the sample'),
        name_responsible: Joi
                .string()
                .min(3)
                .max(60)
                .required()
                .description('The name of the responsible')
    })
};

const getSamples = {
    query: Joi.object({
        sample_name: Joi
            .string()
            .min(1)
            .description('The name of the sample'),
        nameResponsible: Joi
            .string()
            .min(1)
            .description('The name of the responsible')
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
            .description('The ID of the sample')
    })
};

const getByName = {
    query: Joi.object({
        sample_name: Joi
            .string()
            .required()
            .description('The name of the sample')
    })
};

const updateName = {
    params: Joi.object({
        id: Joi.number()
            .required()
            .description('The ID of the sample')
    }),
    payload: Joi.object({
        sample_name: Joi.string()
                    .required()
                    .description('The new name of the sample'),
        name_responsible: Joi.string()
                        .required()
                        .description('The new name of the responsible')
    })
};

const deleteById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
            .description('The ID of the sample')
    })
};

module.exports = {
    createSamplesSchema, 
    getById,
    getByName,
    getSamples,
    updateName,
    deleteById
};