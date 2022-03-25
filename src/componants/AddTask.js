import React from 'react'
import { useState } from 'react'

const AddTask = (props) => {
    const [ text, setText ] = useState("");
    const [ day, setDay ] = useState("");
    const [ reminder, setReminder ] = useState(false);
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('please add some text');
            return;
        }
        props.onAdd({text,day,reminder})
        setText("")
        setDay("")
        setReminder(false)
    }
    return (
        <form className='addForm' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} ></input>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='Day & time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>

            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={false} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className='btn btn-block' id="save" type="submit" value="save task" />
        </form>

    )
}

export default AddTask