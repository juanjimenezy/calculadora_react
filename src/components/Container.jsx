import React from "react";
import { Calculadora } from "./Calculadora";

import styles from "../css/container.module.css"

export const Container = () => {
    return (
        <div>
            <main className={styles.container}>
                <Calculadora></Calculadora>
            </main>
        </div>
    )
}
export default Container


