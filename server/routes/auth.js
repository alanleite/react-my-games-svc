const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')
const db = require('./../database')
const { User } = db.models

module.exports = async function (request, reply) {

    try {

        let username = request.payload.username
        let password = request.payload.password
        let user = await User.findOne({ username })
    
        if (!user) {
            user = await User.create({
                username: username,
                password: passwordHash.generate(password)
            })
        }
        
        if (passwordHash.verify(password, user.password)) {
            let token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET)
            reply({ token })
        }
        else {
            reply.notAuthorized()
        }

    } catch (error) {
        reply.badImplementation(error)
    }


}