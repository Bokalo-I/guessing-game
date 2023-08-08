import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', p: 1 }}>
      <Box sx={{ margin: 'auto' }}>
        <Typography variant="h1">Guessing game</Typography>
        <Button onClick={handleStartGame} variant="contained">
          Start game
        </Button>
      </Box>
    </Box>
  );
};

export default MainPage;
