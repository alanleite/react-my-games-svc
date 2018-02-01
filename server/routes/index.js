const Joi = require('joi')
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
            handler: auth,
            description: 'Authenticate',
            notes: 'Returns a token',
            tags: ['api'],
            validate: {
                payload: {
                    username: Joi.string()
                        .required()
                        .description('your username'),
                    password: Joi.string()
                        .required()
                        .description('your password')
                }
            }
        }
    },
    {
        method: 'get',
        path: '/games',
        config: {
            handler: games,
            description: 'List all games',
            notes: 'Returns a list of games',
            tags: ['api']
        }
    },
    {
        method: 'get',
        path: '/my-games',
        config: {
            handler: list,
            description: 'List my games',
            notes: 'Returns a list of my games',
            tags: ['api']
        }
    },
    {
        method: 'post',
        path: '/my-games/{gameId}',
        config: {
            handler: add,
            description: 'Add my game',
            notes: 'Returns my game',
            tags: ['api'],
            validate: {
                params: {
                    gameId: Joi.string()
                        .required()
                        .description('game id'),
                },
                payload: {
                    comment: Joi.string()
                        .description('comments'),
                    status: Joi.string()
                        .valid('loving', 'needplay', 'available')
                        .required()
                        .description('game status'),
                    stars: Joi.number()
                        .description('stars')
                }
            }
        }
    },
    {
        method: 'put',
        path: '/my-games/{myGameId}',
        config: {
            handler: edit,
            description: 'Edit my game',
            notes: 'Returns my game',
            tags: ['api'],
            validate: {
                params: {
                    myGameId: Joi.string()
                        .required()
                        .description('my game id'),
                },
                payload: {
                    comment: Joi.string()
                        .description('comments'),
                    status: Joi.string()
                        .valid('loving', 'needplay', 'available')
                        .required()
                        .description('game status'),
                    stars: Joi.number()
                        .description('stars')
                }
            }
        }
    },
    {
        method: 'delete',
        path: '/my-games/{myGameId}',
        config: {
            handler: del,
            validate: {
                params: {
                    myGameId: Joi.string()
                        .required()
                        .description('my game id'),
                }
            }
        }
    }
]