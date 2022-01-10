import { getTasks, addTask } from '../models/repositories/taskRepository'
import { User, Task } from '../types'
import { Request, Response } from 'express'



function getAll(req: Request, res: Response) {
    const userId = req.params.id
    getTasks(userId).then((task: Task[]) => {
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

    addTask(task, userId).then(() => {
        res.send('OK')
    })
}

function isValidTask(task: Task) {
    return (
        task.Name.length
    )
}


export default { getAll, insert }
