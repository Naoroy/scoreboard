import { Router } from 'express'
import userController from './controller/userController'
import taskController from './controller/taskController'


const routes = Router()

routes.get('/', (req, res) => res.send("Hello World"))
routes.get('/user/', userController.getAll)
routes.post('/user', userController.insert)
routes.get('/user/:id/task', taskController.getAll)
routes.post('/user/:id/task', taskController.insert)
routes.patch('/user/:id/task/:taskId', taskController.update)
routes.delete('/user/:id/task/:taskId', taskController.remove)


export { routes }
