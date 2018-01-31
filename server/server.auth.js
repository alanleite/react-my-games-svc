const validate = (decoded, request, callback) => {
    if (decoded && decoded.uid) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

module.exports = function (server) {

    server.auth.strategy('jwt', 'jwt', {
        key: process.env.JWT_SECRET,
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] }
    })

    server.auth.default('jwt')

}