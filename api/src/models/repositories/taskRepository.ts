import { run, all, once, each } from '../database'
import { Task } from '../../types'


function getTasks(userId: number) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * FROM Task
        WHERE UserId = ${userId}
        `
        all(sql).then(resolve).catch(reject)
    })
}

function addTask(task: Task, userId: number) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO Task (UserId, Name) VALUES (?, ?)
        `
        once(sql, [ userId, task.Name ])
            .then(resolve).catch(reject)
    })
}

function updateTask(taskId: number, task: Task) {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE \`Task\`
            SET
            ${ mapFields(task) }
            WHERE Id = ?
            `
        once(sql, [ taskId ])
            .then(resolve)
            .catch(reject)
    })

    function mapFields(task: Task) {
        const fields = []

        for (let [field, value] of Object.entries(task)) {
            fields.push(`${field} = "${value}",`)
        }

        return fields.join('').slice(0, -1)
    }
}


export { getTasks, addTask, updateTask }
