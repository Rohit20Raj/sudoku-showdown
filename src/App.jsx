import './App.css';
import SudokuSolver from './components/sudoku-solver';
import Header from './components/header';
import analytics from './firebase/firebase';
import React, { useEffect } from 'react';
import { triggerEvent } from './firebase/trigger-event';

function App() {
  useEffect(() => {
    if (analytics) {
      triggerEvent("PAGE_VIEW", {})
    }
  }, []);

  return (
    <main className='App'>
      <Header/>
      <SudokuSolver/>
    </main>
  );
}

export default App;
