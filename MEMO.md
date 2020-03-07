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
```

## Props

## State

## HTTP

## Event Handling


