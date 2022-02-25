import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import sessions from 'express-session'
import morgan from 'morgan'
import cors from 'cors'
import { routes } from './routes'
import './models/repositories/userRepository'


const app   = express()
const port  = process.env.PORT || 3030

app.use(bodyParser.json())
app.use(cookieParser())
app.use(sessions({
  secret: 'secretkey',
  saveUninitialized: true,
  resave: false
}))
app.use(morgan('dev'))
app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

