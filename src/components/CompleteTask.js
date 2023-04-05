import React from 'react'

function CompleteTask(props) {
  const TaskCompleteHandler = (props) =>{
    var url =(props.complete===0)? '/api/tasks/complete/' +props.id: '/api/tasks/undo/' +props.id;
    fetch(url)
    .then()
    .then()
    .catch(error =>console.log(error));
  }

  if (props.complete===1){
    return (
      <div>
          <button className='btn btn-outline-warning btn-sm ' onClick={() => TaskCompleteHandler(props)}>❌</button>
  
      </div>
  )
  }
  else{
    return (
      <div>
          <button className='btn btn-outline-success btn-sm' onClick={() => TaskCompleteHandler(props)}>✔️</button>
  
      </div>
    )
  }
  
}

export default CompleteTask