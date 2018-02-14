import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard';

const dim = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// let printBoard = () => 
//   console.log(
//     board.map((row) => 
//       row.map(val => val === undefined ? '_' : val )
//          .join(' '))
//       .join('\n'));

// let printValid = () => 
//     console.log(
//       boardValid.map((row) => 
//         row.map(val => val ? '_' : 'X' )
//             .join(' '))
//         .join('\n'));

let validate = (board) => {
  let newBoardValid = dim.map(() => dim.map(() => true));
  let validationWorker = (rowFunc, colFunc, newBoardValid) => {
    for(let i = 0; i < 9; i++){
      let occurences = {};
      for(let j = 0; j < 9; j++){
        let r = rowFunc(i,j);
        let c = colFunc(i,j);
        if(board[r][c] !== undefined) occurences[board[r][c]] = (occurences[board[r][c]] || 0) + 1;
      }
      for(let j = 0; j < 9; j++){
        let r = rowFunc(i,j);
        let c = colFunc(i,j);
        if (occurences[board[r][c]] > 1) newBoardValid[r][c] = false;
      }
    }
  }
  
  //validate rows
  validationWorker((i,j) => i, (i,j) => j, newBoardValid);

  //validate cols
  validationWorker((i,j) => j, (i,j) => i, newBoardValid);

  //validate boxes 
  validationWorker((i,j) => (Math.floor(i/3) * 3) + Math.floor(j/3), 
                   (i,j) => ((i%3) * 3) + (j%3), 
                   newBoardValid);

  return newBoardValid;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: dim.map(() => dim.map(() => undefined)),
      boardValid: dim.map(() => dim.map(() => true))
    };
  }

  render() {
    let handleChange = (row, col, value) => {
      let board = this.state.board;
      board[row][col] = value === '' ? undefined : value;
      //printBoard();
      let boardValid = validate(board);
      //printValid();

      this.setState({
        board,
        boardValid
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku</h1>
        </header>
        <GameBoard board={this.state.board} boardValid={this.state.boardValid} handleChange={handleChange}/>
      </div>
    );
  }
}

export default App;
