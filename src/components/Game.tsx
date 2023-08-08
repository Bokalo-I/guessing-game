import { Box, Button, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { showTemperatureCelsius } from '../utils/showTemperatureCelsius';
import { useNavigate } from 'react-router-dom';
import { MAX_QUESTIONS } from '../pages/GamePage';
import { IGame } from '../interfaces';

interface Props {
  loadQuestion: (updatedGames?: IGame[]) => Promise<void>;
  game: IGame[];
  setGame: React.Dispatch<React.SetStateAction<IGame[]>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Game: FC<Props> = ({ loadQuestion, game, setGame, current, setCurrent }) => {
  const navigate = useNavigate();

  const currentGame = game[current];
  const isTheLastQuestion = current + 1 === MAX_QUESTIONS;

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 3) {
      return;
    }
    const newGameData = game.map((gameData, i) =>
      i === current ? { ...gameData, try: Number(newValue) } : { ...gameData },
    );
    setGame(newGameData);
  };

  const handleSubmit = async () => {
    if (!isTheLastQuestion) {
      const submittedGame: IGame[] = game.map((gameData) =>
        gameData.cityId === currentGame.cityId
          ? { ...gameData, isSubmitted: true }
          : { ...gameData },
      );
      await loadQuestion(submittedGame);
      setCurrent(current + 1);
      return;
    }
    navigate('/results', { state: { game } });
  };

  return (
    <>
      <Box sx={{ m: 1 }}>
        <Typography>{currentGame?.countryName}, </Typography>
        <Typography variant="h2">{currentGame?.cityName}</Typography>
      </Box>
      <Box sx={{ mx: 'auto', mt: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption">Guess the temperature in celsius</Typography>
        <TextField
          value={currentGame?.try?.toString()}
          type="number"
          onChange={handleAnswerChange}
          disabled={currentGame?.isSubmitted}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Your answer is {showTemperatureCelsius(currentGame?.try)}</Typography>
          <Button disabled={currentGame?.isSubmitted} onClick={handleSubmit}>
            {!isTheLastQuestion ? 'Submit' : 'Complete'}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Game;
