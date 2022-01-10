import express from 'express'
import bodyParser from 'body-parser'
import { routes } from './routes'
import './models/repositories/userRepository'


const app   = express()
const port  = process.env.PORT || 3030

app.use(bodyParser.json())
app.use(routes)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

