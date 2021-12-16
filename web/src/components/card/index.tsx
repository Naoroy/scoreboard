import React from 'react'
import JobInterface from './../../jobInterface'

const cardStyle = {
  border: 'solid 3px #555',
  borderRadius: '10px',
  width: '25rem',
  padding: '1rem',
  margin: '1rem',
  background: '#FED'
}

class Card extends React.Component <JobInterface> {
  constructor (props: { job: JobInterface }) {
    super(props.job)
    console.log(props)
  }
  render() {
    return (
      <div style={cardStyle} key={this.props.id}>
        <p>{this.props.task}</p>
        <p>{this.props.date.toDateString()}</p>
      </div>
    )
  }
}

export default Card
