import React from 'react';
import styles from "../css/Button.module.css";

export const Button = ({ color, dato, addValue, cleanValue, calculateResult }) => {

  const operate = () => {
    if (dato === "=")
      calculateResult();
    else if(dato === "AC")
      cleanValue();
    else 
      addValue(dato)
  };
  
    let btnColor = "";
  switch (color) {
    case "w":
      btnColor = styles.btnWhite;
      break;
    case "g":
      btnColor = styles.btnGreen;
      break;
    case "r":
      btnColor = styles.btnRed;
      break;
    default:
      btnColor = "";
      break;
  }

    return (
        <div className={styles.containerBtn}>
          <button className={`${styles.btn} ${btnColor}`} onClick={operate}>{dato}</button>
        </div>
    )
}


export default Button; 