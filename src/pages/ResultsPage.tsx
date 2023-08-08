import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import GameTable from '../components/GameTable';
import { IGame } from '../interfaces';

const ResultsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const resultData = (state.game as IGame[]).map((gameData) => ({
    ...gameData,
    minWinValue: gameData.temperature - 5,
    maxWinValue: gameData.temperature + 5,
    win: gameData.try > gameData.temperature - 5 && gameData.try < gameData.temperature + 5,
  }));

  const isWin = resultData.every(({ win }) => win);

  const handleTryAgain = () => {
    navigate('/game');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Typography variant="h1" component="h1" textAlign="center" sx={{ m: 'auto', p: 3 }}>
        {isWin ? 'Yay, victory!😁🎉' : 'What a pity, You lost (((((( 😢'}
      </Typography>
      <Box sx={{ m: 3 }}>
        <GameTable resultData={resultData} />
      </Box>
      <Box sx={{ mr: 'auto', mb: 3, ml: 3 }}>
        <Button variant="contained" onClick={handleTryAgain}>
          Try Again
        </Button>
        <Button onClick={handleGoHome}>Go Home</Button>
      </Box>
    </Box>
  );
};

export default ResultsPage;
