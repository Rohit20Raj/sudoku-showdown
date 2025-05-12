import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { create2DArray, solver } from "../../utils/solver";
import { deepCompare } from "../../utils/deep-compare";

const ButtonGroups = ({
  board,
  setBoard,
  isSolved,
  setIsSolved,
  setUnfilledCells,
  setIsSolvable,
}) => {
  const handleSolve = () => {
    let unfilledCells = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          let newArr = [i, j];
          unfilledCells = [...unfilledCells, newArr];
        }
      }
    }
    const solvedSudoku = solver(board, unfilledCells);
    setBoard(solvedSudoku);
    setUnfilledCells(unfilledCells);
    deepCompare(solvedSudoku, board)
      ? setIsSolvable(false)
      : setIsSolved(true);
  }

  const handleReset = () => {
    setBoard(create2DArray(9, 0));
    setIsSolved(false);
  }

  return (
    <Stack spacing={4} id="button-group">
      <Button
        variant="contained"
        color="success"
        disabled={isSolved}
        id="buttons-custom"
        sx={{
          "&.Mui-disabled": {
            background: "rgba(46, 125, 50, 0.5)",
            color: "rgba(255, 255, 255, 1)",
          },
        }}
        onClick={handleSolve}
      >
        <Typography id="buttons-custom-font">Solve</Typography>
      </Button>
      {/* <Button
          variant="outlined"
          color="success"
          sx={{
            height: "80px",
            aspectRatio: "4",
            border: '2px solid'
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: '#FFFFFF'
            }}
          >
            Validate
          </Typography>
        </Button> */}
      <Button
        variant="contained"
        color="error"
        id="buttons-custom"
        onClick={handleReset}
      >
        <Typography id="buttons-custom-font">Reset Sudoku</Typography>
      </Button>
    </Stack>
  );
};

export default ButtonGroups;
