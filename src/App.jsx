import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function HolaMundo() {
 
  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList/>
      </div>
    </div>
  )
}

export default HolaMundo