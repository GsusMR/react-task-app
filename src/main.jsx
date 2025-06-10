import React, { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import HolaMundo from './App'
import { TaskContextProvider} from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TaskContextProvider>
            <HolaMundo />
        </TaskContextProvider>
    </StrictMode>
)
