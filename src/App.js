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
// import SampleStateChanging from './component/basic/sample/state-changing'
// react-life-circle
// import SampleReactLifeCircle from './component/basic/sample/react-life-circle'
// import SampleComponentDidUpdate from './component/basic/sample/component-did-update'
import SampleRenderCondition from './component/basic/sample/render-condition'

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
      // todos: TodosData
      isLoading: true
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  // todo handleChange on checkbox
  // handleChange(id) {
  //   // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
  //   // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
  //   // console.log("Changed", id)
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         // todo.completed = !todo.completed // direct edit previous stage
  //         // new array copy by previous state
  //         return {
  //           ...todo,
  //           completed: !todo.completed
  //         }
  //       }
  //       return todo
  //     })
  //     console.log(prevState.todos)
  //     console.log(updatedTodos)
  //     return {
  //       todos: updatedTodos
  //     }
  //   })
  // }
    
  myMethod() {
    return "someStyle"
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }
  
  render() {
    // const TodoComponents = TodosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div>
        {/* {TodoComponents} */}
        {/* <SampleStateChanging /> */}
        {/* <SampleReactLifeCircle /> */}
        {/* <SampleComponentDidUpdate /> */}
        <SampleRenderCondition isLoading={this.state.isLoading} />
      </div>
    )
  }
}

export default App;
