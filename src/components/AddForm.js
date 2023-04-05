import React from "react";
import { useForm } from "react-hook-form";


export default function AddForm() {
  const {
    register,
    handleSubmit 
    
  } = useForm();

  const onSubmit = (data) => {
    
   
    var taskName = data.taskName
     
    const formdata = new FormData();
    formdata.append("taskName", taskName);
    fetch('/api/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: 'taskName='+encodeURIComponent(taskName)

    })
    .then((response) => response.json())
    .then((result) => {
      
    })
  };

  return (
    <div className="add-form mt-2">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="row">
          
          
            <div className="col-9 pe-1"><input  placeholder="Task Name" className="form-control" {...register("taskName")} />
            </div>
            <div className="col-3 ps-1">
              <input type="submit" className="btn btn-success d-block w-100 mx-0 px-0"></input>
            </div>
            
          
        </div>
        </form>
    </div>
  );
}