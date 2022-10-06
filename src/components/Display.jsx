import React from 'react';
import styles from "../css/display.module.css";


export const Display = ({ value, result }) => {

  
    return (
        <div className={styles.display}>
            <div className={styles.operation}>
                {value}
            </div>
            <div className={styles.result}>{result}</div>
        </div>
    );
};


export default Display;
