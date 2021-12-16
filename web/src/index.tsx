import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card/index'
//import { JobInterface } from './jobInterface'

const jobs: Array<object> = [
  { id: "a",
    date: new Date(),
    task: 'Make a POC of a scoreboard app',
    sessionsEstimate: 3,
    sessions: 1,
    sessionLength: 90,
    comment: 'Typescript is pretty fun'
  },
  {
    id: "b",
    date: new Date(),
    task: 'Build a React frontend',
    sessionsEstimate: 1,
    sessions: 1,
    sessionLength: 90,
    comment: 'React is pretty fun'
  },
]

const appStyle = {
  fontFamily: 'sans-serif',
  background: '#CEF',
  padding: '2rem'
}
type AppProps = {}
type AppState = { jobs: Array<object> }
class App extends React.Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      jobs: jobs
    }
  }

  render() {
    return (
      <div style={appStyle}>
        <h1>Scoreboard</h1>
        {
          this.state.jobs.map((job) => {
            console.log(job)
            return (
              <Card
                id={job.id}
                task={job.task}
                date={job.date}
              />
            )
          })
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
