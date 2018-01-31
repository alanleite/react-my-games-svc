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
        method: 'put',
        path: '/my-games',
        config: {
            handler: add
        }
    },
    {
        method: 'post',
        path: '/my-games',
        config: {
            handler: edit
        }
    },
    {
        method: 'delete',
        path: '/my-games',
        config: {
            handler: del
        }
    }
]