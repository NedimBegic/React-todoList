import React, {useState} from 'react';
import Card from '../Ul/Card';
import './AddTask.css';

const AddTask = props => {
    const [task, setTask] = useState("");
    const onHandler = event => {
        event.preventDefault();
        if(task.trim().length === 0) {
            props.isError(true)
            return
        }
        props.onAddList(task);
        setTask("")
    };

    const changeTask = event => {
        setTask(event.target.value);
    }

    return (
        <Card >
            <form className='wrapper from' onSubmit={onHandler}>
                <h1>Add task here:</h1>
                <input onChange={changeTask} type='text' value={task}/>
                <button type="submit">Add Task</button>
            </form>
        </Card>
    )
};

export default AddTask;