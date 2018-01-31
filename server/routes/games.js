const db = require('./../database')
const { Game } = db.models

module.exports = async function (request, reply) {
    reply(await Game.find())
}