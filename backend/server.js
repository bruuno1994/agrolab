const Hapi = require("@hapi/hapi");
const routes = require('./routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const {version} = require('./package.json');
const cors = require('cors')

const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
        cors: {
            origin: ['http://localhost:3000'], // Permite a origem específica
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            schemes: ['http', 'https'],
            info: {
                title: 'API AgroLab',
                version: version
            }
        }
    }
]


const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];


plugins.push(...swaggerPlugin);

module.exports = {server, plugins};
