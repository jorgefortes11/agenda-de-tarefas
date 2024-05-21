import React, { useState } from 'react';
import {
  Button,
  Switch,

  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Settings = ({ onLogout }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState('diariamente');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
    } else {
      // Perform password change logic here
      setError('');
      // Example: alert('Senha alterada com sucesso!');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px auto', maxWidth: 400 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Configurações
      </Typography>
      <Divider />

      <List>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notificações" />
          <Switch checked={notificationsEnabled} onChange={handleNotificationChange} />
        </ListItem>

        {notificationsEnabled && (
          <ListItem>
            <FormControl fullWidth variant="standard"> 
              <InputLabel shrink>Frequência</InputLabel> 
              <Select
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(e.target.value)}
              >
                <MenuItem value="diariamente">Diariamente</MenuItem>
                <MenuItem value="semanalmente">Semanalmente</MenuItem>
                <MenuItem value="mensalmente">Mensalmente</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        )}

        <Divider />

        <ListItem>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Alterar Senha" />
        </ListItem>

        <Box sx={{ paddingLeft: 2 }}>
          <TextField
            label="Nova Senha"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Confirmar Nova Senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            variant="contained"
            onClick={handleChangePassword}
            disabled={!newPassword || !confirmPassword}
            fullWidth
          >
            Alterar Senha
          </Button>
        </Box>

        <Divider />

        <ListItem button onClick={onLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair da Conta" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Settings;
