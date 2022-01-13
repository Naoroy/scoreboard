import { getUser, addUser } from '../models/repositories/userRepository'
import { User } from '../types'
import { Request, Response } from 'express'



function getAll(req: Request, res: Response) {
    getUser().then((users: any[]) => {
        res.send(users)
    })
}

function insert(req: Request, res: Response) {
    const user = req.body

    if (!isValidUser(user)) {
        return res.status(400)
            .send('Missing Fields in User, expected Name, Password and Email')
    }

    addUser(user).then(() => {
        res.send('OK')
    })
}

function isValidUser(user: User) {
    return (
        user.Name.length &&
        user.Password.length &&
        user.Email.length
    )
}


export default { getAll, insert }
