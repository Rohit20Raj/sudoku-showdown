import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { solver } from "../../utils/solver";

const ButtonGroups = ({ board, setBoard }) => {
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
          onClick={() => setBoard(solver(board))}
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
