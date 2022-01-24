import React from 'react'
import { C } from './../../colors'

const cardStyle = {
  border: `solid 3px ${C.BLACK}`,
  borderRadius: '10px',
  //width: '25rem',
  padding: '1rem',
  margin: '1rem',
  background: C.YELLOW
}
const deleteBtnStyle = {
  background: C.RED,
  borderRadius: '25%',
  border: 'none',
  margin: '.2rem',
}
const updateBtnStyle = {
  background: C.BLUE,
  borderRadius: '25%',
  border: 'none',
  margin: '.2rem',
}

type CardProps = {
  task: any
  updateTask: (task:any) => any
  deleteTask: () => any
}
type CardState = {
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
    return (
      <div
        style={cardStyle}
        key={this.props.task.Id}
      >
        <header
          className={"pure-g"}
        >
        <div
          className={"pure-u-18-24"}
        >
          <p>{this.props.task.Name}</p>
        </div>
        <div
          className={"pure-u-6-24"}
        >
          <button
            style={updateBtnStyle}
            onClick={this.toggleForm}
            className={'pure-button'}
          > u </button>

         <button 
            style={deleteBtnStyle} 
            onClick={this.deleteTask}
            className={'pure-button'}
          > x </button>
        </div>
        </header>

        {
          this.state.showUpdateForm 
            ? (
              <form
                style={cardStyle}
                className={'pure-form pure-form-stacked'}
                key={this.props.task.Id}
                onSubmit={this._updateTask} 
              >
                <legend>Update task</legend>
                <label htmlFor="name">Name</label>
                <input type="text" name="taskname" onChange={(e) => this.updateField(e, "Name")} value={this.state.task.Name || ''}/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={(e) => this.updateField(e, "Description")} value={this.state.task.Description|| ''}/>
                <label htmlFor="comment">Comments</label>
                <input type="text" name="comment" onChange={(e) => this.updateField(e, "Comments")} value={this.state.task.Comments || ''}/>
                <input type="submit" className={'pure-button'} />

              </form>
              )
            : this.props.task.Description
              ? this.props.task.Description
              : '-- No description --'
        }
      </div>
    )
  }
}

export default Card
