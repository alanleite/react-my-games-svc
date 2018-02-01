module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        name: String,
        description: String,
        url: String
    }, { collection: 'games' })

    return mongoose.model('Game', Schema)

}