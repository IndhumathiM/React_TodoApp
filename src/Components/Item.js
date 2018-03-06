import React from 'react';
export class Item extends React.Component{
  deleteItem(id){
    console.log("id = "+ id);
    this.props.onDelete(id);
  }
render(){
  console.log(this.props.todos);
  return <ul>
  <li>{this.props.todos.task} - {this.props.todos.status}
  <a href="#" onClick ={this.deleteItem.bind(this,this.props.todos.id)} > X </a>
 </li>

  </ul>
}
}
