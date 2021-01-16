import React, { Component } from 'react'

export default class HelloWorld2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      who: '___'
    }
  }

  handleWorldButtonClick = () => {
    this.setState(
      {who: 'world'}
    )
  }

  handleFriendButtonClick = () => {
    this.setState(
      {who: 'friend'}
    )
  }

  handleReactButtonClick = () => {
    this.setState(
      {who: 'React'}
    )
  }
  
  render() {
    return (
      <div className='HelloWorld'>
      <p>Hello, {this.state.who}!</p>
      <button onClick={this.handleWorldButtonClick} >
        World
      </button>
      <br/>
      <button onClick={this.handleFriendButtonClick} >
        Friend
      </button>
      <br />
      <button onClick={this.handleReactButtonClick} >
        React
      </button>
    </div>
    )
  }

}