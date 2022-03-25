import React from 'react'
import Task from './Task'
const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (<Task key={task.id} task={task} onToggle={() => props.onToggle(task.id)} onDelete={() => props.onDelete(task.id)} />))}
        </>
    )
}

export default Tasks


//onDelete={()=>props.onDelete(task.id)}