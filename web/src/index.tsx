import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card/index'
//import { JobInterface } from './jobInterface'

const appStyle = {
  fontFamily: 'sans-serif',
  background: '#CEF',
  padding: '2rem'
}
type Task = { id: number, name: string, date: Date }
type AppProps = {}
type AppState = { tasks: Task[] }
class App extends React.Component<AppProps, AppState> {
  private api = 'http://localhost:3030'
  constructor(props: {}) {
    super(props)
    this.state = {
      tasks: []
    }
    this.getTasks()
  }

  async getTasks() {
    fetch(`${this.api}/user/1/task/`)
      .then((response) => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div style={appStyle}>
        <h1>Scoreboard</h1>
        {
          this.state.tasks.map((task: Task) => {
            return (
              <Card
                key={task.id}
                id={task.id}
                task={task.name}
                date={task.date}
              />
            )
          })
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
