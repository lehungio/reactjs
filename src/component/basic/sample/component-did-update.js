import React from "react"
import randomcolor from "randomcolor"
import './style/component-did-update.css'

class SampleComponentDidUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: ""
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        // color: randomcolor() // same with componentDidUpdate - duplecate code
      }
    })
  }

  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
        // color: randomcolor() // same with componentDidUpdate - duplecate code
      }
    })
  }

  componentDidMount() {
    // console.log("Mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    // Uncaught Invariant Violation: Maximum update depth exceeded. 
    // This can happen when a component repeatedly calls setState inside componentWillUpdate 
    // or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
    // this.setState({color: newColor})
    if (prevState.count !== this.state.count) {
      console.log("Did update")
      const newColor = randomcolor()
      console.log(newColor)
      this.setState({color: newColor})
    }
  }

  render() {
    console.log("Render")
    return (
      <div>
        <h1 style={{color: this.state.color}}>{this.state.count}</h1>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
      </div>
    )
  }
}

export default SampleComponentDidUpdate