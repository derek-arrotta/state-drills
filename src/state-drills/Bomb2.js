import React, { Component } from 'react';

export default class Bomb2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {  
    
    if (this.state.count >= 8) {
      clearInterval(this.interval)
      return (
        <div>
          BOOM!!!
        </div>
      )}

    else if (this.state.count % 2 === 0) {
      return (
        <div>
          tick
        </div>
      )}

    else {
      return (
        <div>
          tock
        </div>
    )}

  }



}
