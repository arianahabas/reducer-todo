import React, { useReducer, useState } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import styled from 'styled-components'
import { todoReducer, todoList } from './reducers/todoReducer'
import css from './components/Todo.css'

const StyledContainer = styled.div`
  background-color: red;
  border: 1px solid white;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  font-family: 'Recursive', sans-serif;  
`



function App() {
  const [formValue, setFormValue] = useState("");
  const [state, dispatch] = useReducer(todoReducer, todoList)

  ///actions//
  const toggleTask = (todoId) => {
		dispatch({ type: "TOGGLE_COMPLETED", payload: todoId });
	};

	const handleChanges = (e) => {
		setFormValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: formValue });
		setFormValue("");
	};

	const clearCompleted = (e) => {
		e.preventDefault();
		dispatch({ type: "CLEAR_COMPLETED" });
  };
  

    return (
      <div>
     
        <StyledContainer>
          <h2> Lets get this $hiT done! ✅  </h2>
          <TodoForm 
          clearCompleted={clearCompleted}
          formValue={formValue}
          handleChanges={handleChanges}
          handleSubmit={handleSubmit}
          />
          <TodoList 
          todos={state} 
          toggleTask={toggleTask} 
          clearCompleted={clearCompleted}
          />
        </StyledContainer>
      </div>
    );
  
}

export default App;
