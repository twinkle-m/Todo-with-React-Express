import React, { Component } from 'react'
import Task from './Task';

import AddForm from './AddForm';


export class TodoWrapper extends Component {
  render() {
    return (
      
      <div className='container bg-body mt-5 todo-wrapper'>
        <h1>To-Do List</h1>
      
        <div className='col-4 mx-auto'>
            <div className='card'>
              <ul class="list-group list-group-flush">
                  {this.props.tasks.map(function(task, i){
                    return <Task taskName={task.taskName} complete={task.complete} key={i} />;
                  })}
              </ul>
            </div>
            <AddForm  />
        </div>
    
        
        
      </div>
    )
  }
}

export default TodoWrapper