const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {

    let gameId = request.params.gameId

    let myGame = await MyGame.create({
        user: request.auth.credentials.uid,
        game: gameId,
        comment: request.payload.comment,
        status: request.payload.status,
        stars: request.payload.stars
    })

    reply(myGame)
    
}