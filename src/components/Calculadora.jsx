import React from 'react';
import Display from "./Display";
import Board from "./Board";

import styles from "../css/calculadora.module.css"

export const Calculadora = () => {
    return (
        <div className={styles.calculadora}>
            <Display></Display>
            <Board></Board>
        </div>
    )
}


export default Calculadora;