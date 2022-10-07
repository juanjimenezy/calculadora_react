import React from 'react';
import styles from "../css/display.module.css";


export const Display = ({ value, result, historial }) => {

  
    return (
        <div className={styles.display}>
            <div>
                {historial}
            </div>


            <div className={styles.operation}>
                {value}
            </div>
            <div className={styles.result}>{result}</div>
        </div>
    );
};


export default Display;
