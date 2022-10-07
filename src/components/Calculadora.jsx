import React from 'react';
import Display from "./Display";
import Board from "./Board";

import styles from "../css/calculadora.module.css"

const stringMath = require('string-math');

export const Calculadora = () => {
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState(0);
    const [historial, setHistorial] = React.useState('');
    const [flagPoint, setFlagPoint] = React.useState(true);

    const addValue = (newValue) => {
        var vstr = value+newValue;

        console.log(flagPoint);
        if(newValue === '.' && flagPoint){
            setValue(value+newValue);
            setFlagPoint(false);
        }

        if(newValue === '+' && vstr.split('+').length < 3){

            
            console.log(vstr.includes('-'));
            if (!vstr.includes('-') && !vstr.includes('*') && !vstr.includes('/')){
                if(!value){
                    //TODO: sumar con el resultado.
                    setValue(result+newValue);
                }else{
                    setValue(value+newValue);
                }
                
                setFlagPoint(true);
            }
            
        }

        if(newValue === '-' && vstr.split('-').length < 3){
            if (!vstr.includes('+') && !vstr.includes('*') && !vstr.includes('/')){
                setValue(value+newValue);
            }
            setFlagPoint(true);
        }

        if(newValue === '*' && vstr.split('*').length < 3){
            if (!vstr.includes('-') && !vstr.includes('+') && !vstr.includes('/')){
                setValue(value+newValue);
                
            }
            setFlagPoint(true);
        }

        if(newValue === '/' && vstr.split('/').length < 3){
            if (!vstr.includes('-') && !vstr.includes('*') && !vstr.includes('+')){
                setValue(value+newValue);
                
            }
            setFlagPoint(true);
        }

        if (newValue >= 0){
            setValue(value+newValue);
        }

    };

    const calculateResult = () => {
        if (value) {
            setHistorial(historial + '|' + value);
        }
        
        setResult(stringMath(value));
        setValue('');
        setFlagPoint(true);
        
    }

    const cleanValue = () => {
        setValue("");
        setResult(0);
        setFlagPoint(true);
    }

    const limpiarHistorial = () => {
        setHistorial("");
    }

    return (
        <div className={styles.calculadora}>
            <Display value={value} result={result} historial={historial}/>
            <Board addValue={addValue} calculateResult={calculateResult} cleanValue={cleanValue} limpiarHistorial={limpiarHistorial}/>
        </div>
    )
}


export default Calculadora;