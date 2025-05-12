import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";

const SudokuBoard = ({ board, setBoard, isSolved, unfilledCells }) => {
  const inputRefs = useRef([...Array(9)].map(() => Array(9).fill(null)));

  const handleInputChange = (e, rowIndex, cellIndex) => {
    const value = e.target.value.replace(/[^1-9]/, ""); // Only allow 1-9
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = value ? parseInt(value) : 0;
    setBoard(newBoard);

    if (value) moveToNextCell(rowIndex, cellIndex);
  };

  const handleKeyDown = (e, rowIndex, cellIndex) => {
    switch (e.key) {
      case "ArrowUp":
        if (rowIndex > 0) inputRefs.current[rowIndex - 1][cellIndex]?.focus();
        break;
      case "ArrowDown":
        if (rowIndex < 8) inputRefs.current[rowIndex + 1][cellIndex]?.focus();
        break;
      case "ArrowLeft":
        if (cellIndex > 0) inputRefs.current[rowIndex][cellIndex - 1]?.focus();
        break;
      case "ArrowRight":
        if (cellIndex < 8) inputRefs.current[rowIndex][cellIndex + 1]?.focus();
        break;
      case "Enter":
      case " ":
      case "0":
        moveToNextCell(rowIndex, cellIndex);
        break;
      default:
        break;
    }
  };

  const moveToNextCell = (rowIndex, cellIndex) => {
    if (cellIndex < 8) {
      inputRefs.current[rowIndex][cellIndex + 1]?.focus();
    } else if (rowIndex < 8) {
      inputRefs.current[rowIndex + 1][0]?.focus();
    }
  };

  return (
    <Stack id="sudoku-board-wrapper">
      {board.map((row, rowIndex) => (
        <Box key={rowIndex} display="flex">
          {row.map((cell, cellIndex) => {
            const isUnfilled = unfilledCells.some(
              ([r, c]) => r === rowIndex && c === cellIndex
            );

            return (
              <Box
                key={cellIndex}
                id="sudoku-board-cell"
                marginLeft={
                  cellIndex > 0 ? (cellIndex % 3 === 0 ? 2 : 0.5) : 0
                }
                marginTop={
                  rowIndex > 0 ? (rowIndex % 3 === 0 ? 2 : 0.5) : 0
                }
                sx={{
                  background:
                    isSolved && isUnfilled
                      ? "radial-gradient(rgba(39, 154, 220, 0.5), rgba(39, 154, 220, 1))"
                      : "rgba(217, 225, 238, 1)",
                }}
              >
                <input
                  type="text"
                  value={cell === 0 ? "" : cell}
                  onChange={(e) => handleInputChange(e, rowIndex, cellIndex)}
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, cellIndex)}
                  ref={(el) => (inputRefs.current[rowIndex][cellIndex] = el)}
                  maxLength={1}
                  disabled={isSolved}
                />
              </Box>
            );
          })}
        </Box>
      ))}
    </Stack>
  );
};

export default SudokuBoard;
