import React from 'react'
import { Task } from './../../jobInterface'
import { C } from './../../colors'

const cardStyle = {
  border: `solid 3px ${C.BLACK}`,
  borderRadius: '10px',
  width: '25rem',
  padding: '1rem',
  margin: '1rem',
  background: C.YELLOW
}
const deleteBtnStyle = {
  background: C.RED,
  borderRadius: '50%',
  height: '2rem',
  width: '2rem'
}
const updateBtnStyle = {
  background: C.RED,
  borderRadius: '50%',
  height: '2rem',
  width: '2rem'
}

type CardProps = {
  task: any
  updateTask: (task:any) => any
  deleteTask: () => any
}
type CardState = {
  showDescription: boolean
  showUpdateForm: boolean
  task: any
}
class Card extends React.Component <CardProps, CardState> {
  constructor (props: CardProps) {
    super(props)
    this.toggleForm = this.toggleForm.bind(this)
    this._updateTask = this._updateTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.updateField = this.updateField.bind(this)
    this.state = {
      showDescription: false,
      showUpdateForm: false,
      task: this.props.task,
    }
  }

  deleteTask(e:any) {
    e.stopPropagation()
    this.props.deleteTask()
  }

  toggleForm(e:any):void {
    e.stopPropagation()
    this.setState({showUpdateForm: !this.state.showUpdateForm})
  }

  _updateTask(e:any):void {
    e.preventDefault()
    this.props.updateTask(this.state.task)
    this.setState({ showUpdateForm: false })
  }

  updateField(e: any, field: any) {
    const task = this.state.task

    task[field] = e.target.value
    this.setState({ task: task })
  }

  render() {
    if (this.state.showUpdateForm) {
      return (
        <form
          style={cardStyle}
          key={this.props.task.Id}
          onSubmit={this._updateTask} 
        >
          <input type="text" name="taskname" onChange={(e) => this.updateField(e, "Name")} value={this.state.task.Name || ''}/>
          <input type="text" name="description" onChange={(e) => this.updateField(e, "Description")} value={this.state.task.Description|| ''}/>
          <input type="text" name="comment" onChange={(e) => this.updateField(e, "Comments")} value={this.state.task.Comments || ''}/>
          <input type="submit" />
          
        </form>
      )
    }
    return (
      <div
        style={cardStyle}
        key={this.props.task.Id}
        onClick={() => this.setState({showDescription : !this.state.showDescription})}
      >
        <button style={deleteBtnStyle} onClick={this.deleteTask}>x</button>
        <button style={updateBtnStyle} onClick={this.toggleForm}>u</button>
        <p>{this.props.task.Name}</p>

        {
          this.state.showDescription
            ? <p>{this.props.task.Description || '-- No description --'}</p>
            : ''
        }
      </div>
    )
  }
}

export default Card
