const Router = require('express')
const router = new Router()
const taskController = require(`../Controllers/taskController`)

router.post('/tasks', taskController.addTask)
router.get('/tasks', taskController.getTasks)
router.delete('/tasks/:task_id', taskController.deleteTask)

module.exports = router