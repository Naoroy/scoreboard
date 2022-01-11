import { all, once } from '../database'
import { User } from '../../types'


function getUser() {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * FROM User
        `
        all(sql).then(resolve).catch(reject)
    })
}

function addUser(user: User) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO User (Name, Password, Email) VALUES (?,?,?)
        `
        once(sql, [ user.Name, user.Password, user.Email ])
            .then(resolve).catch(reject)
    })
}


export { getUser, addUser }
