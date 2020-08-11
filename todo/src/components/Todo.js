import React from 'react'

export const Todo = (props) => {
   const {todo} = props
    return (
        //each individual todo will display the below content. (from initial state)
        <div>
            <p> {todo.item} </p>
        </div>
    )
}

export default Todo