import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button `
    font-family: 'Recursive', sans-serif;
    border-radius: 5px;
    margin: 5px;
    padding: 8px;


`
const Style = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%;
    align-items: center;
    padding: 10px;

    input{
        font-family: 'Recursive', sans-serif;
        margin: 5px;
    }

`

 export default function TodoForm ({clearCompleted, formValue, handleChanges, handleSubmit}){

        return (
            <Style>
                <form onSubmit={handleSubmit}>
                    <input 
                    placeholder='Enter your task here' 
                    type='text' 
                    name='formValue' 
                    onChange={handleChanges} 
                    value={formValue}
                    >
                    </input>
                    <StyledButton>Add</StyledButton>
                </form>
               <StyledButton onClick={clearCompleted}>Clear Completed </StyledButton>
            </Style>
        )
    
}
