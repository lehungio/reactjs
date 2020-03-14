import React from 'react';
// import './App.css';
import './style/contact-card.css';

// greeting with inline css
// import Header from './component/basic/header';
// import Greeting from './component/basic/greeting';
// import MainContent from './function/basic/main-content';
// import Footer from './function/basic/footer';

// sample jsx
// import MyInfo from './function/basic/my-info';
// import HelloWorld from './component/basic/hello-world';
// import TimeOfDay from './function/basic/time-of-date';

// contact
// import ContactCard from './component/basic/contact-card';

// joke
// import Joke from './component/basic/joke';
// import JokesData from './component/basic/jokes-data';

// product
// import Product from './component/basic/product';
// import ProductsData from './component/basic/products-data';


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
// import SampleState from './component/basic/sample/state';
// import SampleStateLogin from './component/basic/sample/state-login'
import SampleStateChanging from './component/basic/sample/state-changing'

// <hr />
// <h2>{this.state.name}</h2>
// <p>{this.state.age} years old</p>

// todo
// import TodoItem from './component/todo/todo-item';
// import TodosData from './component/todo/todos-data';

// class-based component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // todos: todosData
    }
  }
    
  myMethod() {
    return "someStyle"
  }
  
  render() {
    // const TodoComponents = TodosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div>
        {/* {TodoComponents} */}
        <SampleStateChanging />
      </div>
    )
  }
}

export default App;
