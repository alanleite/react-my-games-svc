module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        game: { type: Types.ObjectId, ref: 'Game' },
        comment: String,
        status: String,
        stars: String
    }, { collection: 'my-games' })

    return mongoose.model('MyGame', Schema)

}