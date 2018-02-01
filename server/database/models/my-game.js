module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        user: { type: Types.ObjectId, ref: 'User' },
        game: { type: Types.ObjectId, ref: 'Game' },
        comment: String,
        status: { type: String, enum: ['loving', 'needplay', 'available']},
        stars: Number
    }, { collection: 'my-games' })

    return mongoose.model('MyGame', Schema)

}