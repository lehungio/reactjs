import React from 'react'

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class SampleReactLifeCircle extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // componentWillMount() {
        
  // }

  componentDidMount() {
    // GET data needed to display
  }

  // componentWillReceiveProps(nextProps) {
  //   // run everytime receive props from parent
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // componentWillUnMount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
  // }

  render() {
    return (
      <div>
        SAMPLE REACT LIFE CIRCLE
      </div>
    )
  }
}

export default SampleReactLifeCircle