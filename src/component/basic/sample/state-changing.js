import React from 'react'

class SampleStateChanging extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("clicked")
    // alert("clicked")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <img onMouseOver={() => console.log("Hover")} alt="init" src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        {/* <button onClick={() => console.log("I was clicked!")}>Click me</button> */}
        <button onClick={this.handleClick}>Click me</button>
        Click count: {this.state.count}
      </div>
    )
  }
}

export default SampleStateChanging