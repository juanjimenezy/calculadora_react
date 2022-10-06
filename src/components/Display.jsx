import React from 'react';
import styles from "../css/display.module.css";


export const Display = (props) => {
    const num1 = 2;
    const num2 = 3;
    const op = '+';
    var result = 0;


    return (
        <div className={styles.display}>
            <div className={styles.mode}>
                <span className={styles.containerBtn}>
                    <button className={`${styles.modeBtn} ${styles.modeLight}`}>☼</button>
                    <button className={`${styles.modeBtn} ${styles.modeDark}`}>☽</button>
                </span>
            </div>
            <div className={styles.operation}>
                {num1}<span className={styles.operador}> {op} </span> {num2}

            </div>
            <div className={styles.result}>{result}</div>
        </div>
    );
};


export default Display;
