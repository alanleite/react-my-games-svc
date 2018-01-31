const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {
    let userId = request.auth.credentials.uid
    reply(await MyGame.find({ user: userId }))
}