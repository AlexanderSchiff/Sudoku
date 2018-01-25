import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let dim = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //let board = array
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku</h1>
        </header>
        <table>
          <tbody>
            {dim.map((i) =>
              <tr key={i}>
                {dim.map((j) =>
                  <td key={j}>
                    <input type="number" min="1" max="9" />
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
