import React, { Component } from 'react';

const dim = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class GameBoard extends Component {
    render() {
  
      return (
          <table>
            <tbody>
              {dim.map((i) =>
                <tr key={i}>
                  {dim.map((j) =>
                    <td key={j}>
                      <input 
                        style={{color: this.props.boardValid[i][j] ? "": "RED"}}
                        type="number"
                        min="1"
                        max="9"
                        value={this.props.board[i][j]}
                        onChange={(e) => this.props.handleChange(i, j, e.target.value)} />
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
      );
    }
  }
  
  export default GameBoard; 
