const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(ResultAnalysis){
    ResultAnalysis.use|('/api', createProxyMiddleware({
        target: 'https://pi4agrolab.onrender.com/api/',
    }))
}