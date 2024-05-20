import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TaskList from './components/TaskList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <TaskList />
      </div>
    </ThemeProvider>
  );
};

export default App;
