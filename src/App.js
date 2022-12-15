import React, { useState } from 'react';
import './App.css';
import List from './Components/List'
import AddTask from './Components/AddTask';
import ErrorMessage from './Ul/ErrorMessage';

function App() {
  const [tasks, setTask] = useState([]);
  const [error, setError] = useState(false)
  const addList = task => {
    setTask(prevTask => {
      return [...prevTask, task];
    })
  }

  const disableError = props => {
    setError(false);
  }

  const removeList = event => {
    let element = tasks.indexOf(event.target.innerText);
    let updateTodo = tasks.filter((task, i) => task[i] !== task[element]);
    setTask(updateTodo)   
    }
  
  return (
    <div>
      { error && <ErrorMessage disableError={disableError} />}
      <AddTask isError={setError} onAddList={addList} />
      {tasks.map(task => {
        return (
          <List removeList={removeList} key={Math.random()} task={task} />
        )
      })}
    </div>
  );
}

export default App;
