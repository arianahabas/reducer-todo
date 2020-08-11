import React, { useState } from 'react'
import Todo from './Todo'


export const TodoList = (props) => {
    const { todos } = props

    return (
        <div>
            {
            todos.map((todo) => (
                <Todo 
                 todo={todo}
                 key= {todo.id}
                />//map through each todo and for each todo dispay "Todo" --- send the todo item down to Todo//
                ))
            }
        </div>
           
    )
}

export default TodoList