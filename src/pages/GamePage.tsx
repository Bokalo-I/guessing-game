import React, { useEffect, useState } from 'react';
import { getCity } from '../services/getCity';
import { getCityTemperature } from '../services/getCityTemperature';
import { Box, CircularProgress } from '@mui/material';
import GameNavigation from '../components/GameNavigation';
import Game from '../components/Game';
import { IGame } from '../interfaces';

export const MAX_QUESTIONS = 5;

const GamePage = () => {
  const [game, setGame] = useState<IGame[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadQuestion = async (updatedGames?: IGame[]) => {
    try {
      setIsLoading(true);

      const city = await getCity();
      const currentGames = updatedGames || game;
      const cityIds = currentGames.map(({ cityId }) => cityId);

      if (cityIds.includes(city.id)) {
        await loadQuestion(updatedGames);
        return;
      }

      const temperature = await getCityTemperature(city.name, city.countryCode);

      const data: IGame = {
        cityId: city.id,
        cityName: city.name,
        countryName: city.country,
        temperature,
        try: 0,
        isSubmitted: false,
      };
      const newGameData = [...currentGames, data];

      setGame(newGameData);
      setIsLoading(false);
    } catch (error) {
      await loadQuestion(updatedGames);
    }
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
      <Box sx={{ margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Game
            current={current}
            game={game}
            loadQuestion={loadQuestion}
            setCurrent={setCurrent}
            setGame={setGame}
          />
        )}
      </Box>
      <GameNavigation current={current} game={game} isLoading={isLoading} setCurrent={setCurrent} />
    </Box>
  );
};

export default GamePage;
