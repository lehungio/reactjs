import React from 'react'

// Class template
// TODO
// 1: change ClassName

// Challenge
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// Reference
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class ApiFetchingData extends React.Component {
  constructor() {
    super()
    this.state = {
      // count: 0
      loading: false,
      character: {}
    }
  }

  // static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // }

  // getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  // }

  // componentWillMount() {
        
  // }

  componentDidMount() {
    this.setState({loading: true})
    // GET data needed to display
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => 
        // console.log(data)
        {
          this.setState({
            character: data,
            loading: false
          })
        }
      )
  }

  // componentWillReceiveProps(nextProps) {
  //   // run everytime receive props from parent
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true if want it to update
  //   // return false if not
  // }

  // componentWillUnMount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
  // }

  render() {
    const text = this.state.loading === true ? 'Loading...' : this.state.character.name

    return (
      <div>
        {/* CLASS TEMPLATE */}
        <h4>Sample fetching API data</h4>
        {text}
      </div>
    )
  }
}

export default ApiFetchingData