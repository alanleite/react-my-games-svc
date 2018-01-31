const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {
    let myGameId = request.params.myGameId
    reply(await MyGame.findByIdAndRemove(myGameId))
}