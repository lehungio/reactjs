import React from 'react';
import './App.css';

import Header from './function/basic/header';
import MainContent from './function/basic/main-content';
import Footer from './function/basic/footer';

// sample jsx
// import TimeOfDay from './function/basic/time-of-date';

// todo
import TodoItem from './function/basic/todo-item';

function App() {
  return (
    <div className="todo-list">
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div> 
  )
}

export default App;
