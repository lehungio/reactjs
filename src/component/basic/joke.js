import React from 'react'

// https://scrimba.com/g/glearnreact
// 22 React Props and Styling Practice
// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchLine" prop
  // and render those however you'd like
  
// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
  // E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component

function Joke(props) {
  return (
    <div>
      <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
      {/* <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3> */}
      <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
      <hr />
    </div>
  )
}
 
export default Joke

// jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
// JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

// const jokeComponent = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

/* <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />

// hardcode
<Joke 
    question="What's the best thing about Switzerland?" 
    punchLine="I don't know, but the flag is a big plus!"
/>

<Joke 
    question="Did you hear about the mathematician who's afraid of negative numbers?" 
    punchLine="He'll stop at nothing to avoid them!"
/>

<Joke 
    question="Hear about the new restaurant called Karma?" 
    punchLine="There’s no menu: You get what you deserve."
/>

<Joke 
    question="Did you hear about the actor who fell through the floorboards?" 
    punchLine="He was just going through a stage."
/>

<Joke 
    question="Did you hear about the claustrophobic astronaut?" 
    punchLine="He just needed a little space."
/> */