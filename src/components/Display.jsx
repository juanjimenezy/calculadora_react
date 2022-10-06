import React from 'react';
import styles from "../css/display.module.css";


export const Display = ({ value, result }) => {

  
    return (
        <div className={styles.display}>
            <div className={styles.mode}>
                <span className={styles.containerBtn}>
                    <button className={`${styles.modeBtn} ${styles.modeLight}`}>☼</button>
                    <button className={`${styles.modeBtn} ${styles.modeDark}`}>☽</button>
                </span>
            </div>
            <div className={styles.operation}>
                {value}
            </div>
            <div className={styles.result}>{result}</div>
        </div>
    );
};


export default Display;
