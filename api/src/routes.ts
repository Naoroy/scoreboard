import { Router } from 'express'
import userController from './controller/userController'
import taskController from './controller/taskController'


const routes = Router()

routes.get('/user/', userController.getAll)
routes.post('/user', userController.insert)

routes.get('/user/:id/task', taskController.getAll)

export { routes }
