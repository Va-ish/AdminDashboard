import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppTheme from '../shared-theme/AppTheme';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
 
  return (
    <AppTheme>
       <Box
        sx={{
          flexGrow: 1,
          boxShadow:
            'hsla(0, 0%, 100%, 0.05) 0px 2px 8px, hsla(0, 0%, 100%, 0.03) 0px 4px 12px',
        }}
      >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mx: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XDE
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </AppTheme>
  );
}
