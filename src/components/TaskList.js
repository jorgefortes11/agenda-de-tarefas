import React, { useState } from 'react';
import { TextField, Button, List } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  const addTask = (newTaskText) => {
    setTasks([...tasks, { text: newTaskText, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTaskText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newTaskText;
    setTasks(updatedTasks);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
        <TextField
          label="Adicionar Tarefa"
          variant="outlined"
          value={taskInput}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Adicionar Tarefa
        </Button>
      </form>
      <div style={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
        <List>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default TaskList;
