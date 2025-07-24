import React from 'react'
import TodoItems from "./TodoItems"

const Todos = (props) => {
  let toDolistStyle = {
    minHeight: "46vh"
  }
  return (
    <div className='container' style={toDolistStyle}>
      <h3 className='my-3'>To Dos List</h3>
      {
        props.todos.length === 0 ? "No Todos to Display" :
          props.todos.map((todo) => {
            return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
      }

    </div>
  )
}

export default Todos
