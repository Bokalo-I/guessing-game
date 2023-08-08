import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { FC } from 'react';
import { IGameResult } from '../interfaces';
import { showTemperatureCelsius } from '../utils/showTemperatureCelsius';

interface Props {
  resultData: IGameResult[];
}

const GameTable: FC<Props> = ({ resultData }) => {
  const tableItemStyle = (triedValue: number, win: boolean, temperature: number) => {
    if (!win) {
      return { color: '#8B0000' };
    }
    if (triedValue !== temperature) {
      return { color: '#CCCC00' };
    }
    return { color: '#006400' };
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Min win value</TableCell>
            <TableCell align="right">Max win value</TableCell>
            <TableCell align="right">Your try</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultData.map((gameData, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {gameData.countryName}
              </TableCell>
              <TableCell align="right">{gameData.cityName}</TableCell>
              <TableCell align="right">{showTemperatureCelsius(gameData.temperature)}</TableCell>
              <TableCell align="right">{showTemperatureCelsius(gameData.minWinValue)}</TableCell>
              <TableCell align="right">{showTemperatureCelsius(gameData.maxWinValue)}</TableCell>
              <TableCell
                sx={tableItemStyle(gameData.try, gameData.win, gameData.temperature)}
                align="right">
                {showTemperatureCelsius(gameData.try)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameTable;
