import React from 'react';
import Item from './Todo'

const TodoList = ({todos, toggleTask, clearCompleted}) => {
    
    return (
    
            <div>
                {todos.map((item) => (
                    <Item  
                    key={item.id} 
                    item={item}
                    toggleItem={toggleTask} 
                    clearCompleted={clearCompleted}
                    />
                ))}
            </div>
    )
}

export default TodoList