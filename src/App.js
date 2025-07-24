import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponent/AddTodo';
import AboutUs from './MyComponent/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete = (todo) => {
    console.log("deleting this todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this to do", title, desc);
    let sno = !todos.length ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>

        <Header title="My Todo list" searchBar={false} />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );

}

export default App;

