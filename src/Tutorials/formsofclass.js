
import React, { Component } from 'react'

class Forms extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      comment: '',
      tutorials: '',
      button: '',
    }
  }
  //handeler
  usernamehandeler = (event) =>{
    this.setState({username: event.target.value})
  }
  commenthandler = (event) => {
    this.setState({comment: event.target.value})
  }
  //select handeler
  tutorialshandeler = (event) =>{
    this.setState({tutorials: event.target.value})
  }
  //button handler
  buttonhandeler = (event) =>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.tutorials}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.buttonhandeler}>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.usernamehandeler}/>
          <div>
            <label>comment: </label>
            <textarea value={this.state.comment} onChange={this.commenthandler}></textarea>
          </div>
          <div>
              <select value={this.state.tutorials} onChange={this.tutorialshandeler}>
                <option>c++</option>
                <option>html</option>
                <option>javascript</option>
              </select>
          </div>
          <button type='submit'>submit</button>
          </form>
      </div>
    )
  }
}
export default Forms;
