

import { isEmpty,size } from 'lodash';
import React, {useState} from 'react';
import shortid from 'shortid';


function App() {

  
 const [task, setTask]=useState("");
 const [tasks, setTasks] = useState([]);
 const [editMode, seteditMode] = useState(false);
 const [id, setId] = useState("");
 
 const
  addTask=(e)=>{
  e.preventDefault();
   if(isEmpty(task)){
   console.log("Actividad Vacia....")
   return;
 }

 const newTask={
   id: shortid.generate(),
   name: task
 }

 setTasks([...tasks, newTask]);

 
 setTask("");
}

const saveTask=(e)=>{
  e.preventDefault()
  if(isEmpty(task)){
    console.log("Task Empty")
    return
  }

  const editTasks=tasks.map(item=>item.id===id ? {id, name: task}: item);
  setTasks(editTasks);
  seteditMode(false);
  setTask("");
  setId("");

}

const deleteTask =(id)=>{
  const filteredTask=tasks.filter(task=>task.id!==id)
  setTasks(filteredTask);
}

const editTask =(theTask)=>{
  setTask(theTask.name)
  seteditMode(true);
  setId(theTask.id)
}

  return (
    <div className="container mt-5">
      <h1>Actividades</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista De Actividades</h4>
      
      {    
        size(tasks)===0?(
          <h5 className="text-center">Aun No Hay Actividades Programadas</h5>
        ):(

        <ul className="list-group">
          { 
            tasks.map((task) => (
              <li className="list-group-item" key={task.id}>
                <span className="lead">{task.name}</span>
                <button 
                  className="btn btn-danger btn-sm float-right mx-2"
                onClick={()=>deleteTask(task.id)}
                >
                  Eliminar
                </button>
                <button 
                  className="btn btn-warning btn-sm float-right"
                  onClick={()=>editTask(task)}
                >
                  Editar
                </button>
              </li>

            ))
              }

        </ul>
        )

        }

        </div>
        <div className="col-4">
          <h4>
            {editMode?"Modificar Actividad" : "Agregar Actividad"}</h4>
          <form onSubmit={ editMode ? saveTask : addTask}>
            <input type="text" className="form-control" mb-2 placeholder="Ingrese La Actividad..."
            onChange={(text)=>setTask(text.target.value)}
            value={task}
            />
            <button className={editMode ? "btn btn-warning btn-block":"btn btn-dark btn-block"} type="submit">{editMode ? "Guardar" : "Agregar"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
