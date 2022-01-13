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

type CardProps = {
  Id: number
  Name: string
  deleteTask: (id:number) => any
}
class Card extends React.Component <CardProps> {
  constructor (props: CardProps) {
    super(props)
  }

  deleteTask() {
    this.props.deleteTask(this.props.Id)
  }

  render() {
    return (
      <div style={cardStyle} key={this.props.Id}>
        <button style={deleteBtnStyle} onClick={() => this.deleteTask()}>x</button>
        <p>{this.props.Name}</p>
      </div>
    )
  }
}

export default Card
