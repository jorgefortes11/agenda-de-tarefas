import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const TaskItem = ({ task, index, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, newTaskText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => toggleComplete(index)} />
      {isEditing ? (
        <TextField
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          fullWidth
        />
      ) : (
        <ListItemText
          primary={task.text}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
      )}
      <IconButton onClick={handleEdit} edge="end">
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </IconButton>
      {isEditing && (
        <IconButton onClick={() => setIsEditing(false)} edge="end">
          <CancelIcon />
        </IconButton>
      )}
      <IconButton onClick={() => deleteTask(index)} edge="end">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
