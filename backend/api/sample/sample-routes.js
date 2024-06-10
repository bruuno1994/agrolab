const { getSamples, create, findById, findByName,updateName, deleteById} = require('./sample-controller');
const schema = require('./sample-schema');

const plugin = {
    name: 'sample-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/samples",
                options: {
                    tags: ['sample'],
                    description: 'List of samples',
                    handler: getSamples,
                    validate: schema.getSamples
                }
            },
            {
                method: "GET",
                path: "/samples/{id}",
                options: {
                    tags: ['sample'],
                    description: 'Sample by Id',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "GET",
                path: "/samples/sample",
                options: {
                    tags: ['sample'],
                    description: 'Sample by name',
                    handler: findByName,
                    validate: schema.getByName
                }
            },
            {
                method: "POST",
                path: "/samples",
                options: {
                    tags: ['sample'],
                    handler: create,
                    validate: schema.createSamplesSchema
                }
            },
            {
                method: "PUT",
                path: "/samples/{id}",
                options: {
                    tags: ['sample'],
                    description: 'Update sample name',
                    handler: updateName,
                    validate: schema.updateName
                }
            },
            {
                method: "DELETE",
                path: "/samples/{id}",
                options: {
                    tags: ['sample'],
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;