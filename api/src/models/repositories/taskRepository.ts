import { all, query } from '../database'
import { User, Task } from '../../types'


function getTasks(userId: string) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * FROM Task
        WHERE UserId = ?
        `
        query(sql, [ userId ]).then(resolve).catch(reject)
    })
}

function addTask(task: Task, userId: string) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO Task (UserId, Name) VALUES (?, ?)
        `
        query(sql, [ userId, task.Name ])
            .then(resolve).catch(reject)
    })
}


export { getTasks, addTask }
