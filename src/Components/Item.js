import React from 'react';
export class Item extends React.Component{
render(){
  console.log(this.props.todos);
  return <ul>
  <li>{this.props.todos.task} - {this.props.todos.status}</li>

  </ul>
}
}
