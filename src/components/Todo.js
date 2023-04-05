import React from 'react'
import Task from './Task';

function Todo(props) {
  return (
     
    
        <div className='card'>
          <ul class="list-group list-group-flush">
              {props.tasks.map(function(task, i){
                return <Task taskName={task.taskName} complete={task.complete} id={task.id} key={i} />;
              })}
          </ul>
        </div>
  
  )
}

export default Todo