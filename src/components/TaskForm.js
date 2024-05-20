import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const TaskForm = ({ onSubmit, onCancel, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">{task ? 'Editar Tarefa' : 'Adicionar Tarefa'}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Data e Hora de Conclusão"
            variant="outlined"
            type="datetime-local"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            {task ? 'Salvar' : 'Adicionar'}
          </Button>
          <Button variant="contained" color="secondary" onClick={onCancel} style={{ marginLeft: '10px' }}>
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
