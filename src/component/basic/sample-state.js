import React from 'react'

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class SampleState extends React.Component {
  render () {
    return (
      <div>
        State: {this.props.answer}
      </div>
    )
  }
}

export default SampleState