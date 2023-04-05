import React, { useState ,useEffect} from 'react';
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import AddForm from './components/AddForm';


const initialtasks = []

  function App(){
  /* let nresponse = await fetch('http://localhost:5000/tasks');
  console.log(nresponse) */
  const [tasks, setTasks] = useState(initialtasks);
   useEffect(() => {
     
    fetch('/tasks' ,{headers: {
      'Content-Type': 'application/json',
      
        }
      }
    )
    .then(response =>    response.json()  )
    .then(data =>  setTasks(data))
    .catch(error =>console.log(error));
    
  }, [tasks])  

 
  return (

    <div className='app container'>
      <div>
        <h1 className='text-center mt-5'>To-Do List</h1>
        <div className='col-4 mx-auto'>
          <Todo tasks={tasks}/>
          <AddForm />
        </div>
      </div>
    </div>
  )
}

export default App