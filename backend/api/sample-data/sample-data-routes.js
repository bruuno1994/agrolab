const { getSampleData, createSampleData, getSampleDataByIdSample, deleteBySampleId } = require('./sample-data-controller');
const schema = require('./sample-data-schema');

const plugin = {
    name: 'sample-data-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "POST",
                path: "/samples/records",
                options: {
                    tags: ['sample-data'],
                    description: 'Create sample data',
                    handler: createSampleData,
                    validate: schema.createSampleDataSchema
                }
            },
            {
                method: "GET",
                path: "/samples/records",
                options: {
                    tags: ['sample-data'],
                    description: 'Get sample data',
                    handler: getSampleData,
                    validate: schema.getSampleDataSchema
                }
            },
            {
                method: "GET",
                path: "/samples/records/{id}",
                options: {
                    tags: ['sample-data'],
                    description: 'Get sample data by sample Id',
                    handler: getSampleDataByIdSample,
                    validate: schema.getBySampleId
                }
            },
            {
                method: "DELETE",
                path: "/samples/records/{id}",
                options: {
                    tags: ['sample-data'],
                    handler: deleteBySampleId,
                    validate: schema.deleteBySampleId
                }
            }
        ]);
    }
};

module.exports = plugin;