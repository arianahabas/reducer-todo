import React from 'react';
import styled from 'styled-components'

const Style = styled.div `
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
    color: white;
    text-align: center;
    border-radius: 15px;
    font-family: 'Recursive', sans-serif;
    box-shadow: 1px 2px;
    


    &.completed {
    text-decoration: line-through;
    color: grey;
  }
`

const Item = ({toggleItem, item}) => {
console.log(item)
    return (
      <Style 
      onClick={()=> toggleItem(item.id)} 
      className= {`item${item.completed ? ' completed' : ''}`}>
        <div>{item.task}</div>
      </Style>
    );
  };
  
  export default Item;