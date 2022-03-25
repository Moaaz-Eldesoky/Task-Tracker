import Header from './componants/Header';
import Tasks from './componants/Tasks'
import AddTask from './componants/AddTask';
import './App.css';

import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor appointment",
        day: 'feb, 5th, 2022',
        reminder: false,
      },
      {
        id: 2,
        text: "football match",
        day: 'feb, 4th, 2022',
        reminder: true,
      },
      {
        id: 3,
        text: "pray",
        day: 'feb, 3th, 2022',
        reminder: false,
      }

    ]
  )
  //add task
const addTask=(task)=>{
  const id= Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
//Delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
  console.log("delete",id)
}

//toggle reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  console.log('Reminder Set',id)
}

  return (
    <>
      <div className='container'>
        <Header title="Task Tracker" />
        {showAddTask&&<AddTask onAdd={addTask}/>}
        {tasks.length!==0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:<h3>there is no tasks to show</h3>}
      </div>
    </>
  );
}

export default App;
