import React from 'react'
// import {FaTimes} from "react-icons/fa"

const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder?'reminder':''}`} onDoubleClick={props.onToggle}>
        <h3>{props.task.text}<button onClick={props.onDelete} style={{color:"white" ,backgroundColor:"red", borderRadius:"50%",padding:"5px",cursor:"pointer"}}/></h3>
        <p>{props.task.day}</p>
    </div>
  )
}

export default Task