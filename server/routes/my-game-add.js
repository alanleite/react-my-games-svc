const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {

    let gameId = request.params.gameId

    let myGame = await MyGame.create({
        game: gameId,
        comment: '',
        status: '',
        stars: 0
    })

    reply(myGame)
    
}