const Hapi = require('hapi')

const server = new Hapi.Server({
    connections: {
        routes: {
            cors: {
                origin: ['*'],
                headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"],
                additionalHeaders: ['Access-Control-Allow-Origin']
            }
        }
    }
})

server.connection({
    port: process.env.PORT || 9090,
    host: process.env.HOST || '0.0.0.0'
});

server.register([
    { register: require('hapi-auth-jwt2') },
    { register: require('hapi-boom-decorators') }
], err => {
    if (err) console.log(err)
    require('./server.auth')(server)
    server.route(require('./routes'))
})

module.exports = server 