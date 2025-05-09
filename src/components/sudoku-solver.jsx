import { Box, Stack } from '@mui/material';
import React from 'react'
import SudokuBoard from './board/sudoku-board';
import ButtonGroups from './buttons/button-group';

const SudokuSolver = () => {
  const [board, setBoard] = React.useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  return (
    <Stack direction="row">
      <SudokuBoard board={board} setBoard={setBoard}/>
      <ButtonGroups/>
    </Stack>
  )
}

export default SudokuSolver