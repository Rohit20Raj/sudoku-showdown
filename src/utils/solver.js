export const solver = (board, unfilledCells) => {
  let sudoku = board.map(row => [...row]);
  let solved = { isSolved: false };

  recursive(sudoku, unfilledCells, 0, solved);

  // Check if solution was found
  // if (!solved.isSolved) {
  //   throw new Error("Invalid Sudoku: No solution exists.");
  // }

  return !solved.isSolved ? board : sudoku;
};

const recursive = (sudoku, unfilledCells, index, solved) => {
  if (index >= unfilledCells.length) {
    solved.isSolved = true;
    return;
  }

  let row = unfilledCells[index][0],
    col = unfilledCells[index][1];

  for (let i = 1; i <= 9; i++) {
    if (isSafe(sudoku, row, col, i)) {
      sudoku[row][col] = i;
      recursive(sudoku, unfilledCells, index + 1, solved);
      if (solved.isSolved) return; // Stop recursion if solved
      sudoku[row][col] = 0;
    }
  }
};

export const isSafe = (sudoku, row, col, num) => {
  // check row
  for (let i = 0; i < sudoku[row].length; i++) {
    if (sudoku[row][i] === num) return false;
  }

  // check col
  for (let i = 0; i < sudoku.length; i++) {
    if (sudoku[i][col] === num) return false;
  }

  // check 3x3 grid
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (sudoku[i][j] === num) return false;
    }
  }

  return true;
};


export function create2DArray(n, value) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(value);
  }
  return arr;
}
