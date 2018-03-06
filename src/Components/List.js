import React from 'react';
import {Item} from './Item';
export class List extends React.Component{
  deleteItem(id){
    console.log("list= "+id);
    this.props.onDelete(id);
  }
render(){
  let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todos=>{
        return(
          <Item onDelete ={this.deleteItem.bind(this)}key={todos.id} todos = {todos}/>
        )
      });
    }

  return (<div className="List">
      <h3> Latest Todos </h3>
      {todoItems}
      </div>)
}
}
