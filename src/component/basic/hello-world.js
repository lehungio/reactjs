import React from 'react';

const firstName = "Hung"
const lastName = "Le"

class HelloWorld extends React.Component {  
  render() {
    return(
      <div>
        {/* <h1>Hello, World!</h1> */}
        {/* <p>This is hello world from component</p> */}
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
      </div>
    );
  }
}

export default HelloWorld;

// function App() {
//   return (
//     <HelloWorld />
//   )
// }