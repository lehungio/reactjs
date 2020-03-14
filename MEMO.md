# REACTJS

## Why
1. Virtual DOM 
- Faster in javascript
2. Resusable component
3. Maintain by Facebook
4. Hirable

## Technical
Fragment
Parent / Child component
```js
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
```
Higher-Order Components (HOCs)
Render props
Context
Optimizations (PureComponent, Dynamic Imports, React.lazy, React.Suspense, React.memo)
Hooks
React Router
Caveats
```js
// arrow function
const App = () => <h1>Hello world!</h1>

function App() {
  return (
    <h1>Hello world!</h1>
  )
}
```

## Component

## JSX
javascript version of HTML
```js
import React from "react"
```

## Styling
```js
<header className>This is the header</header>
document.getElementById("something").className += " new-class-name"

// inline style
<h1 style={{color: "#FF8C00"}}>Good {timeOfDay} to you, sir or madam!</h1>
<h3 style={{display: props.question ? "block" : "none"}}>
  Question: {props.question}
</h3>
```

## Props
- Very excited
```
```

## State
- Data component maintain = change the data
- need to be class-based component
- super
```js
constructor() {
  super()
  this.state = {} // objects
}
```
- changing state
```js
this.setState({})
```

## Event Handlings
- Reference https://reactjs.org/docs/events.html#supported-events


## HTTP


