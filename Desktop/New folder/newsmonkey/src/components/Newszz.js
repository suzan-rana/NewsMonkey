import React, { Component } from 'react'

export default class News extends Component {
    
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this)
        this.state = {
            name : this.props.name,
            number : 78
        }
    }

    changeName() {
        this.setState({
            name : this.state.number + 5,
            number : this.state.name
        })
    }

    
  render() {
    return (
      <div>
        Hello world, {this.props.name} and {this.state.name} ====== {this.props.name}
        <button onClick={ this.changeName }>Change to Your name.</button>
      </div>
    )
  }
}
