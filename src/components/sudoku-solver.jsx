import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import SudokuBoard from "./board/sudoku-board";
import ButtonGroups from "./buttons/button-group";

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
  const [isSolved, setIsSolved] = useState(false);
  const [isSolvalble, setIsSolvable] = useState(true);
  const [unfilledCells, setUnfilledCells] = useState([]);

  return (
    <Stack id="puzzle-container">
      <SudokuBoard
        board={board}
        setBoard={setBoard}
        isSolved={isSolved}
        unfilledCells={unfilledCells}
      />
      <ButtonGroups
        board={board}
        setBoard={setBoard}
        isSolved={isSolved}
        setIsSolved={setIsSolved}
        setUnfilledCells={setUnfilledCells}
        setIsSolvable={setIsSolvable}
      />
    </Stack>
  );
};

export default SudokuSolver;
