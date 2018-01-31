module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        name: String,
        description: String,
        responsavel: String
    }, { collection: 'games' })

    return mongoose.model('Game', Schema)

}