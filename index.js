const server = require('./server')

server.start(function (err) {
    if (err) {
        console.error('Error: ', err)
    } else {
        console.log(`Server started at: ${server.info.uri}`)
    }
})