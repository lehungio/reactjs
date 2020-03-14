import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
          checked={props.item.completed} 
          // onChange={() => console.log("changed")} 
          onChange={() => props.handleChange(props.item.id)} 
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem

// render
// const TodoComponents = TodosData.map(item => <TodoItem key={item.id} item={item} />)

// return (
//   <div>
//     {TodoComponents}
//   </div>
// )