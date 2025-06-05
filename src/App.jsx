import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from './data/task'
import { useState, useEffect } from 'react'


function HolaMundo() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  },[])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }


  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default HolaMundo