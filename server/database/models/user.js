module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        username: String,
        password: String,
    }, { collection: 'user' })

    return mongoose.model('User', Schema)

}