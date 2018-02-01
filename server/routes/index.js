const auth = require('./auth')
const games = require('./games')
const add = require('./my-game-add')
const del = require('./my-game-del')
const edit = require('./my-game-edit')
const list = require('./my-game-list')

module.exports = [
    {
        method: 'post',
        path: '/auth',
        config: {
            auth: false,
            handler: auth
        }
    },
    {
        method: 'get',
        path: '/games',
        config: {
            handler: games
        }
    },
    {
        method: 'get',
        path: '/my-games',
        config: {
            handler: list
        }
    },
    {
        method: 'post',
        path: '/my-games/{gameId}',
        config: {
            handler: add
        }
    },
    {
        method: 'put',
        path: '/my-games/{myGameId}',
        config: {
            handler: edit
        }
    },
    {
        method: 'delete',
        path: '/my-games/{myGameId}',
        config: {
            handler: del
        }
    }
]