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
  deleteTask: () => any
}
type CardState = {
  showDescription: boolean
  showUpdateForm: boolean
}
class Card extends React.Component <CardProps, CardState> {
  constructor (props: CardProps) {
    super(props)
    this.updateTask = this.updateTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
      showDescription: false,
      showUpdateForm: false
    }
  }

  deleteTask(e:any) {
    e.stopPropagation()
    this.props.deleteTask()
  }

  updateTask(e:any):void {
          e.stopPropagation()
          this.setState({showUpdateForm: !this.state.showUpdateForm})
        }
  render() {
    return (
      <div
        style={cardStyle}
        key={this.props.task.Id}
        onClick={() => this.setState({showDescription : !this.state.showDescription})}
      >
        <button style={deleteBtnStyle} onClick={this.deleteTask}>x</button>
        <button style={updateBtnStyle} onClick={this.updateTask}>u</button>
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
