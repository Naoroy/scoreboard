import { getUser, addUser, getUserByName} from '../models/repositories/userRepository'
import { User } from '../types'
import { Request, Response } from 'express'
let session: any


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

function login(req: Request, res: Response) {
    const user = req.body
    session = req.session
    session.userid = user.Name
    res.send({ sessionid: session.userid })
}

function checkUser(req: any, res: Response, next: any) {
    const session = req.session

    if (session.userid) {
        getUserByName(session.userid)
        .then((u: User) => {
            if (u.Name == session.userid) {
                next()
            } else {
                res.status(403).send('User does not exist')
            }
        })
    } else {
        res.status(403).send('User does not exist')
    }
}

function logout(req: Request, res: Response) {
    req.session.destroy((err) => {
        if (err) throw err
    })
    res.send('User logged out')
}

function exists(user: User) {
    console.log('implement user check')
    return true
}


export default { getAll, insert, login, checkUser, logout }
