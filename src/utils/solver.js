export const solver = (board) => {
  let unfilledCells = new Array(0);
  let sudoku = [...board];

    for(let i=0; i<board.length; i++){
      for(let j=0; j<board[i].length; j++){
        if(board[i][j] === 0) {
          let newArr = [i, j];
          unfilledCells = [...unfilledCells, newArr];
        }
      }
    }
    // console.table(board);

    let solved = {isSolved: false};
    
    recursive(sudoku, unfilledCells, 0, solved);

    return sudoku;
}

const recursive = (sudoku, unfilledCells, index, solved) => {
  if(index >= unfilledCells.length) {
    solved.isSolved = true;
    return;
  }

  let row = unfilledCells[index][0], col = unfilledCells[index][1];

  for(let i = 1; i <= 9; i++){
    if(isSafe(sudoku, row, col, i)){
      sudoku[row][col] = i;
      recursive(sudoku, unfilledCells, index+1, solved);
      if(!solved.isSolved){
        sudoku[row][col] = 0;
      }
    }
  }  
}

const isSafe = (sudoku, row, col, num) => {
  // check row 
  for(let i = 0; i<sudoku[row].length; i++){
    if(sudoku[row][i] === num) return false;
  }

  // check col
  for(let i=0; i<sudoku.length; i++){
    if(sudoku[i][col] === num) return false;
  }

  // check 3x3 grid
  let startRow = Math.floor(row / 3) * 3;
  let endRow = Math.ceil(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  let endCol = Math.ceil(col / 3) * 3;

  for(let i = startRow; i < endRow; i++){
    for(let j = startCol; j < endCol; j++){
      if(sudoku[i][j] === num) return false;
    }
  }

  return true;
}

function create2DArray(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  return arr;
}