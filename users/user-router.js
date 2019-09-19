const router = require('express').Router()

const Users = require('./user-model')
const rest = require('../auth/auth-middleware')

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            console.log(users)
            //res.status(202).json({ loggedInUser: req.user.username })
            res.send(users)

        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router