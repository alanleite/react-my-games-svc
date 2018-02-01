const server = require('./server')
const init = require('./server/database/initial')

init().then(() => {
    server.start(function (err) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(`Server started at: ${server.info.uri}`)
        }
    })
}).catch(err => {
    console.log(`Error to init database: `, err)
})

