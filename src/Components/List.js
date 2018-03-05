import React from 'react';
import {Item} from './Item';
export class List extends React.Component{
render(){
  let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todos=>{
        return(
          <Item key={todos.task} todos = {todos}/>
        )
      });
  return (<div className="List">
      <h3> Latest Todos </h3>
      {todoItems}
      </div>)
}
}
