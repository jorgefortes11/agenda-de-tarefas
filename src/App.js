import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import LoginSignup from './components/login';
import Settings from './components/settings';
import { 
  Container, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton,
  Paper,
  Switch,
  FormControlLabel,
  createTheme,
  ThemeProvider, 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSettings(false);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {isLoggedIn && (
            <>
              <IconButton edge="start" color="inherit" aria-label="settings" onClick={toggleSettings}>
                <SettingsIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleThemeChange}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Agenda de Tarefas
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="sm" style={{ marginTop: '20px', padding: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px', minHeight: '50vh' }}>
          {!isLoggedIn ? (
            <LoginSignup onLogin={handleLogin} />
          ) : (
            showSettings ? (
              <Settings onLogout={handleLogout} />
            ) : (
              <>
                <Typography variant="h4" align="center" gutterBottom>
                  Lista de Tarefas
                </Typography>
                <TaskList />
              </>
            )
          )}

          <footer style={{ marginTop: '20px', textAlign: 'center' }}>
            © Jorge Fortes
          </footer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
