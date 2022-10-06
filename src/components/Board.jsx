import React from 'react';
import Button from './Button';

import styles from '../css/board.module.css';

export const Board = ({ addValue, calculateResult, cleanValue }) => {


    const datos = [
        { color: "w", dato: 7 },
        { color: "w", dato: 8 },
        { color: "w", dato: 9 },
        { color: "r", dato: "/" },
        { color: "w", dato: 4 },
        { color: "w", dato: 5 },
        { color: "w", dato: 6 },
        { color: "r", dato: "*" },
        { color: "w", dato: 1 },
        { color: "w", dato: 2 },
        { color: "w", dato: 3 },
        { color: "r", dato: "-" },
        { color: "g", dato: "AC" },
        { color: "w", dato: "0" },
        { color: "w", dato: "." },
        { color: "r", dato: "+" },
        { color: "q", dato: "=" },
      ];

    return (
        <div className={styles.board} >
          {datos.map((e, i) => (
            <Button cleanValue={cleanValue} calculateResult={calculateResult} addValue={addValue} key={i} color={e.color} dato={e.dato}> </Button>
          ))}
    </div>
    )
}


export default Board;