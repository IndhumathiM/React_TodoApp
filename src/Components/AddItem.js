
import React from 'react';
import uuid from 'uuid';
export class AddItem extends React.Component {
  constructor(){
    super();
    this.state={
      newItem:{}
    }
  }
  static defaultProps = {
    statuses:['Open','Closed']
  }

  handleSubmit(e){
if(this.refs.task.value === ""){
alert("please enter the Task name")
}else{
  this.setState({newItem:{
    id:uuid.v4(),
    task:this.refs.task.value,
    status:this.refs.status.value
  }},function(){
    //console.log(this.state);
    this.props.addItem(this.state.newItem);
  });
}

   e.preventDefault();
 }
  render() {
let statusOptions = this.props.statuses.map(status=>{
  return <option key="status" value={status}>{status}</option>
});
    return (
      <div className="item">
      <h3>  Add Task</h3>
      <form onSubmit = {this.handleSubmit.bind(this)}>
      <div>
      <label> Task:</label>
      <input type="text" ref="task" />
      </div>
      <div>
      <label> status:</label>
      <select ref="status">
        {statusOptions}
      </select>
      </div>

      <input type= "submit" value = "submit"/>
      </form>
      </div>
    );
  }
}
