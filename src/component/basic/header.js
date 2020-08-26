import React from 'react'

// function Header() {
//   return (
//     <header className="navbar">This is my header</header>
//   )
// }

class Header extends React.Component {
  render() {
    return (
      <header className="navbar">Welcome, {this.props.username}!</header>
    )
  }
}

export default Header