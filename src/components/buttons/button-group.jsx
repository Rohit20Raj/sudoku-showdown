import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { solver } from "../../utils/solver";

const ButtonGroups = ({ board, setBoard, setIsSolved, setUnfilledCells }) => {
  return (
    <Stack direction={"column"} spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Button
          variant="contained"
          color="success"
          sx={{
            height: "80px",
            aspectRatio: "4",
          }}
          onClick={() => {
            let unfilledCells = [];
            for(let i=0; i<board.length; i++){
              for(let j=0; j<board[i].length; j++){
                if(board[i][j] === 0) {
                  let newArr = [i, j];
                  unfilledCells = [...unfilledCells, newArr]
                }
              }
            }
            setBoard(solver(board, unfilledCells));
            setUnfilledCells(unfilledCells);
            setIsSolved(true);
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
            }}
          >
            Solve
          </Typography>
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
      </Stack>
      <Button
        variant="contained"
        color="error"
        sx={{
          height: "80px",
          aspectRatio: "4",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
          }}
        >
          Reset Sudoku
        </Typography>
      </Button>
    </Stack>
  );
};

export default ButtonGroups;
