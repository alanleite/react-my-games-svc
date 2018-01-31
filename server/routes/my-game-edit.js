const db = require('./../database')
const { MyGame } = db.models

module.exports = async function (request, reply) {

    let myGameId = request.params.myGameId

    await MyGame.findByIdAndUpdate(myGameId, {
        comment: request.payload.comment,
        status: request.payload.status,
        stars: request.payload.stars
    })

    reply({ success: true })
    
}