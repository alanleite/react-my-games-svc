const mongoose = require('mongoose')
mongoose.Promise = Promise
require('./models/user')(mongoose, mongoose.Schema.Types)
require('./models/game')(mongoose, mongoose.Schema.Types)
require('./models/my-game')(mongoose, mongoose.Schema.Types)
mongoose.connect(process.env.MONGO_URI)
module.exports = mongoose