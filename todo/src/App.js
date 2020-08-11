import React, { useState } from "react";
import "./App.css";
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'


export const initialTodos = [
    {
        item: 'Study',
        completed: false,
        id: 1
    },
    {
      item: 'Make Dinner',
      completed: false,
      id: 2
  }

];

function App() {
 const [todos , setTodos ] = useState(initialTodos)
  console.log(todos)

  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList 
      todos={todos} // send intialTodos down to list in order to map through each item
      /> 
    </div>
  );
}

export default App;
