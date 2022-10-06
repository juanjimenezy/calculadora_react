import React from 'react';
import styles from "../css/Button.module.css";

export const Button = ({ color, dato }) => {

  function prueba (dato) {
    console.log(dato);
  }

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
          <button type="button" onClick={prueba(dato)} className={`${styles.btn} ${btnColor}`} >{dato}</button>
        </div>
    )
}


export default Button; 