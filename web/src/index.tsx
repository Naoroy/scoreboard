import React from 'react'
import ReactDOM from 'react-dom'
//import "purecss"
import Card from './components/card/index'
import { Task } from './jobInterface'
import { C } from './colors'

const appStyle = {
  fontFamily: 'sans-serif',
  background: C.BLUE,
  padding: '2rem'
}
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%'
}
type AppProps = {}
type AppState = { tasks: Task[], taskname: string }
class App extends React.Component<AppProps, AppState> {

  api = 'http://localhost:3030'
  constructor(props: {}) {
    super(props)
    this.state = {
      tasks: [],
      taskname: '',
    }
    this.updateTask = this.updateTask.bind(this)
    this._updateTask = this._updateTask.bind(this)
    this.updateField = this.updateField.bind(this)
    this.addTask = this.addTask.bind(this)
    this.getTasks = this.getTasks.bind(this)

    this.updateTask()
  }

  updateTask() {
    this.getTasks()
      .then(tasks => this.setState({ tasks }))
  }

  _updateTask(taskId: number, newtask: Task) {
    const url = `${this.api}/user/1/task/${taskId}`
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    fetch(url, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(newtask)
    })
      .then(r => r)
      .then(this.getTasks)

  }

  async getTasks() {
    return await fetch(`${this.api}/user/1/task/`)
      .then((response) => response.json())
      .then(tasks => tasks)
  }

  addTask(e:any) {
    e.preventDefault()
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
  }

  render() {
    return (
      <div style={appStyle}>
        <h1>Scoreboard</h1>
        <form
          style={formStyle} 
          onSubmit={(e) => this.addTask(e)}
        >
          <label htmlFor="newTask">Task name</label>
          <input name="newTask" type="text" onChange={this.updateField}value={this.state.taskname} />
        </form>
        <div className="pure-g">
        {
          this.state.tasks.map((task: Task) => {
            return (
              <div
                key={task.Id}
                // className={"pure-u-1-5 pure-u-sm-1-2 pure-u-md-1-3"}
                className={"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"}
              >
                <Card
                  key={task.Id}
                  task={task}
                  deleteTask={() => this.deleteTask(task.Id)}
                  updateTask={(newtask) => this._updateTask(task.Id, newtask)}
                />
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
class NewTaskForm extends React.Component<{taskname:boolean},{}> {
  constructor(props:any) {
    super(props)
    this.state = {
      taskname: ''
    }
  }
  addTask(e) {
    e.preventDefault
  }
  render() {
    return (
      <form
        style={formStyle} 
        onSubmit={this.addTask()}
      >
        <label htmlFor="newTask">Task name</label>
        <input name="newTask" type="text" onChange={this.updateField}value={this.state.taskname} />
      </form>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
