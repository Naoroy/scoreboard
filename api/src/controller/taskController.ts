import { getTasks, addTask, updateTask, removeTask } from '../models/repositories/taskRepository'
import { User, Task } from '../types'
import { Request, Response } from 'express'



function getAll(req: Request, res: Response) {
    const userId = req.params.id
    getTasks(parseInt(userId)).then((task: Task[]) => {
        res.send(task)
    })
}

function insert(req: Request, res: Response) {
    const userId = req.params.id
    const task = req.body

    if (!isValidTask(task)) {
        return res.status(400)
            .send('Missing Fields in User, expected Name, Password and Email')
    }

    addTask(task, parseInt(userId))
        .then(() => { res.send('OK') })
        .catch(console.log)
}

function update(req: Request, res: Response) {
    const taskId = req.params.taskId
    const task = req.body

    updateTask(parseInt(taskId), task) 
        .then(() => res.send('OK'))
        .catch(console.log)
}

function remove(req: Request, res: Response) {
    const taskId = req.params.taskId
    const task = req.body

    removeTask(parseInt(taskId)) 
        .then(() => res.send('OK'))
        .catch(console.log)
}

function isValidTask(task: Task) {
    return (task.Name.length)
}


export default { getAll, insert, update, remove }
