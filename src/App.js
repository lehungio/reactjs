import React from 'react';
// import './App.css';
import './style/contact-card.css';

import Header from './component/basic/header';
import Greeting from './component/basic/greeting';
import MainContent from './function/basic/main-content';
import Footer from './function/basic/footer';

// sample jsx
// import MyInfo from './function/basic/my-info';
// import HelloWorld from './component/basic/hello-world';
// import TimeOfDay from './function/basic/time-of-date';

// todo
// import TodoItem from './component/todo/todo-item';
// import TodosData from './component/todo/todos-data';

// contact
// import ContactCard from './component/basic/contact-card';

// joke
// import Joke from './component/basic/joke';
// import JokesData from './component/basic/jokes-data';
// const jokeComponent = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
// {jokeComponent}

// product
// import Product from './component/basic/product';
// import ProductsData from './component/basic/products-data';
// const productComponent = ProductsData.map(item => <Product key={item.id} product={item}/>)
// {productComponent}

// function-based component
// function App() {
//   const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item}/>)
//   return (
//     <div className="">
//     </div> 
//   )
// }

// sample
// state
// import SampleState from './component/basic/sample-state'
// <h1>Is state important to know? {this.state.answer}</h1>
// <SampleState answer={this.state.answer}/>

// <hr />
// <h2>{this.state.name}</h2>
// <p>{this.state.age} years old</p>

// class-based component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "lehung",
      isLoggedIn: false
    }
  }
    
  myMethod() {
    return "someStyle"
  }
  
  render() {
    // console.log(this.props)
    // console.log(this.myMethod)
    let wouldDisplay

    // if (this.state.isLoggedIn === true) {
    //   wouldDisplay = "in"
    // } else {
    //   wouldDisplay = "out"
    // }

    return (
      // <div className="">
      //   <h1>You are currently logged {wouldDisplay}</h1>
      // </div>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;
