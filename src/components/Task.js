import React from 'react'

import CompleteTask from './CompleteTask'
import DeleteTask from './DeleteTask'

function Task({taskName, complete, id}) {
  if (complete === 1) {
    return(
      <div className='task-wrapper'>
        <li className='task list-group-item'>
          <div className='row'>
            <div className='col-md-9'>
              ✔️
              <span className='completed'>{taskName}
              </span> 
            </div>
            <div  className='col-md-3'>
            <CompleteTask id={id} complete={complete}/>
            <DeleteTask id={id}/>
            </div>
          </div>
          
        </li>
        
      </div>
    )
  } else
  return(
    <div className='task-wrapper'>
        <li className='task list-group-item'>
          <div className='row'>
            <div className='col-md-9'>
            ⚫
              <span className=''>{taskName}
              </span> 
            </div>
            <div  className='col-md-3'>
            <CompleteTask id={id} complete={complete}/>
            <DeleteTask id={id}/>
            </div>
          </div>
          
        </li>
        
      </div>
  )
}


export default Task