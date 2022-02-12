import { Button } from "..";
import React from "react";
import styles from "./index.module.css";

const MobileInput = () => {
  return (
    <div className={styles.input_box}>
      <input placeholder="US1+1" className={styles.country_input} />
      <input placeholder="Enter your mobile number" className={styles.number_input} />
      <Button label="Send Link" className={styles.button}/>
    </div>
  );
};

export default MobileInput;
