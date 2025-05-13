import logo from './logo.svg';
import './App.css';
import SudokuSolver from './components/sudoku-solver';
import Header from './components/header';

function App() {
  return (
    <main className='App'>
      <Header/>
      <SudokuSolver/>
    </main>
  );
}

export default App;
