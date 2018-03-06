import React from 'react';
//import './App.css';
import {List} from './Components/List';
import uuid from 'uuid';
import {AddItem} from './Components/AddItem';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:{}
    }
  }
  componentWillMount(){
    this.setState({todos:[
      {
        'id':uuid.v4(),
        'task': 'Design',
        'status':'Open'
      },
      {
        'id':uuid.v4(),
        'task': 'Coding',
        'status':'Closed'
      },{
        'id':uuid.v4(),
        'task': 'Test',
        'status':'Open'
      }
    ]});
  }
  handleAddItem(item){
      console.log(item);
      let todos = this.state.todos;
      todos.push(item);
      this.setState({todos:todos});

    }
handleDeleteItem(id){
  console.log("Deleted item= "+id);
  let todos = this.state.todos;
   let index =todos.findIndex(x => x.id === id)
   todos.splice(index,1);
   this.setState({todos:todos});

}
  render() {
    return (
      <div className="App">
      <h1>Todo List </h1>
      <AddItem addItem={this.handleAddItem.bind(this)}/>
      <List todos={this.state.todos} onDelete={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
