import React from 'react';
import Display from "./Display";
import Board from "./Board";

import styles from "../css/calculadora.module.css"

const stringMath = require('string-math');

export const Calculadora = () => {
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState(0);

    const addValue = (newValue) => {
        setValue(value+newValue);
    };

    const calculateResult = () => {
        setResult(stringMath(value));
    }

    const cleanValue = () => {
        setValue("");
        setResult(0);
    }

    return (
        <div className={styles.calculadora}>
            <Display value={value} result={result}/>
            <Board addValue={addValue} calculateResult={calculateResult} cleanValue={cleanValue}/>
        </div>
    )
}


export default Calculadora;