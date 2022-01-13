import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card/index'
import { Task } from './jobInterface'
import { C } from './colors'

const appStyle = {
  fontFamily: 'sans-serif',
  background: C.BLUE,
  padding: '2rem'
}
type AppProps = {}
type AppState = { tasks: Task[], taskname: string }
class App extends React.Component<AppProps, AppState> {

  api = 'http://localhost:3030'
  constructor(props: {}) {
    super(props)
    this.state = {
      tasks: [],
      taskname: ''
    }
    this.updateTask = this.updateTask.bind(this)
    this.updateField = this.updateField.bind(this)
    this.addTask = this.addTask.bind(this)

    this.updateTask()
  }

  updateTask() {
    this.getTasks()
      .then(tasks => this.setState({ tasks }))
  }

  async getTasks() {
    return await fetch(`${this.api}/user/1/task/`)
      .then((response) => response.json())
      .then(tasks => tasks)
  }

  addTask(e:any) {
    e.preventDefault()
    console.log(this.state.taskname)
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    fetch(`${this.api}/user/1/task`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        Name: this.state.taskname,
      })
    })
      .then(this.updateTask)

  }

  deleteTask(id: number) {
    fetch(`${this.api}/user/1/task/${id}`, {method: 'DELETE'})
      .then(this.updateTask)
  }
  updateField(e:any) {
    e.preventDefault()
    this.setState({taskname: e.target.value})
    console.log(this.state.taskname)
  }

  render() {
    return (
      <div style={appStyle}>
        <h1>Scoreboard</h1>
        <form onSubmit={(e) => this.addTask(e)}>
          <input type="text" onChange={this.updateField}value={this.state.taskname} />
          <input type="submit" value="+" />
        </form>
        {
          this.state.tasks.map((task: Task) => {
            return (
              <Card
                key={task.Id}
                Id={task.Id}
                Name={task.Name}
                deleteTask={() => this.deleteTask(task.Id)}
              />
            )
          })
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
