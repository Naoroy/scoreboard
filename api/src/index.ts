import express from 'express'

const APP   = express()
const PORT  = process.env.PORT || 3030

APP.get('/', (req, res) => {
  res.send(
    [
      {
        date: new Date().toDateString(),
        task: 'Make a POC of a scoreboard app',
        sessionsEstimate: 3,
        sessions: 1,
        sessionLength: 90,
        comment: 'Typescript is pretty fun'
      },
      {
        date: new Date().toDateString(),
        task: 'Build a React frontend',
        sessionsEstimate: 1,
        sessions: 1,
        sessionLength: 90,
        comment: 'React is pretty fun'
      },
  ])
})

APP.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
