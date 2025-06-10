import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title,description)
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            />

            <textarea placeholder="Descripción tarea"
            onChange = {(e) => setDescription(e.target.value)}
            value={description}></textarea>
            <button>Guardar</button>
        </form>   
    )
}

export default TaskForm