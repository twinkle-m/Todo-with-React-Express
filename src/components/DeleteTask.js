import React from 'react'

function DeleteTask(props) {
  const TaskDeleteHandler = (props) =>{
    var url ='/api/tasks/' +props.id
    fetch(url)
    .then()
    .then()
    .catch(error =>console.log(error));
  }


    return (
      <div>
          <button className='btn btn-outline-danger btn-sm mt-1' onClick={() => TaskDeleteHandler(props)}>🗑️</button>
  
      </div>
  )
  }
 

export default DeleteTask