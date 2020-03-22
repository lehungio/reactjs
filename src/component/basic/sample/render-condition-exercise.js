import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
  // class-based component
  // constructor method
2. Have state keep track of whether the user is logged in or not
  // isLoggedIn: Boolean (true of false)
3. Add a button that logs the user in/out
  // evet listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
      // conditional rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
  // conditional rendering
*/

class ClassName extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // DEBUG method handleClick() working or not
    // console.log("I'm working!")
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'
    let displayText = this.state.isLoggedIn ? 'Logged in' : 'Logged out'
    
    return (
      <div>
        {/* CLASS TEMPLATE */}
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    )
  }
}

export default ClassName