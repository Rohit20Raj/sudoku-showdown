import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import SudokuBoard from "./board/sudoku-board";
import ButtonGroups from "./buttons/button-group";

const SudokuSolver = () => {
  // const [board, setBoard] = React.useState([
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // ]);
  const [board, setBoard] = useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]);
  const [isSolved, setIsSolved] = useState(false);
  const [isSolvalble, setIsSolvable] = useState(true);
  const [unfilledCells, setUnfilledCells] = useState([]);

  return (
    <Stack direction="row" spacing={4} width={"100%"} justifyContent={"center"}>
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
