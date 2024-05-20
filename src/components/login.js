import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Avatar,
  Link,
  Box,
  Snackbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login/signup
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message
  const [showErrorMessage, setShowErrorMessage] = useState(false); // State for error message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message text

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        setErrorMessage('As senhas não coincidem');
        setShowErrorMessage(true);
        return;
      }
      // Handle registration logic here
      // Simulate successful registration
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setIsSignUp(false); // Switch to login page
      }, 3000); // Show success message for 3 seconds
    } else {
      // Handle login logic here
      onLogin(); // Assume onLogin handles successful login
    }
  };

  return (
    <Grid container component="main" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={11} sm={8} md={5} component={Paper} elevation={6} square>
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar style={{ margin: '10px', backgroundColor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? 'Criar Conta' : 'Login'}
          </Typography>
          <Box mt={2} mb={3}>
            <Typography variant="h6" align="center">
              Bem-vindo à sua agenda de tarefas
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '20px 0' }}
            >
              {isSignUp ? 'Criar Conta' : 'Login'}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp
                    ? 'Já tem uma conta? Faça login'
                    : 'Ainda não tem uma conta? Cadastre-se'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Snackbar open={showSuccessMessage} autoHideDuration={3000} onClose={() => setShowSuccessMessage(false)}>
        <Alert onClose={() => setShowSuccessMessage(false)} severity="success">
          Conta criada com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar open={showErrorMessage} autoHideDuration={3000} onClose={() => setShowErrorMessage(false)}>
        <Alert onClose={() => setShowErrorMessage(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default LoginSignup;
