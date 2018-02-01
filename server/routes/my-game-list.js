const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {
    try {
        let userId = request.auth.credentials.uid
        let myGames = await MyGame.find({ user: userId }).populate('game')
        reply(myGames)
    } catch (error) {
        reply.badImplementation(error)
    }
}