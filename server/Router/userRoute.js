const Router = require('express')
const router = new Router()
const userController = require(`../Controllers/userController`)

router.post('/users', userController.addUser)
router.get('/users/:user_nickname', userController.getInfoUser)
router.get('/users', userController.getUsers)

module.exports = router