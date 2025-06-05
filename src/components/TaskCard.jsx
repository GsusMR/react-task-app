function TaskCard({task}) {

  function mostrarAlerta(){
    alert("Eliminando...")
  }
  
  return (
     <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={mostrarAlerta}>Eliminar tarea</button>
      </div>
    )
  
}

export default TaskCard