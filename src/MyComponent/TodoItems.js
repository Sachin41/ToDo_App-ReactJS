import React from 'react'
import { Button } from 'react-bootstrap'

export default function TodoItems({ todo, onDelete }) {
  return (
    <div className='my-3'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</Button>
      <hr />
    </div>
  )
}
