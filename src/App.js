import React from 'react';
//import './App.css';
import {List} from './Components/List';
import uuid from 'uuid';

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

  render() {
    return (
      <div className="App">
      <h1>Todo List </h1>
      <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
