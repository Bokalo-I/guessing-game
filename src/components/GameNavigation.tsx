import React, { FC, memo } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MAX_QUESTIONS } from '../pages/GamePage';
import { IGame } from '../interfaces';

interface Props {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  game: IGame[];
  isLoading: boolean;
}

const GameNavigation: FC<Props> = ({ current, setCurrent, game, isLoading }) => {
  const textContent = `Question ${current + 1} of ${MAX_QUESTIONS}`;
  const isForwardDisabled = current === game.length - 1 || isLoading;
  const isBackDisabled = !current;

  const handleClickBack = () => {
    setCurrent(current - 1);
  };

  const handleClickForward = () => {
    setCurrent(current + 1);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}>
      <IconButton disabled={isBackDisabled} onClick={handleClickBack}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={{ userSelect: 'none' }}>{textContent}</Box>
      <IconButton disabled={isForwardDisabled} onClick={handleClickForward}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default memo(GameNavigation);
