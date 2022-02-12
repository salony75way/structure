import { Button, MobileInput } from "../Form";

import classNames from "classnames";
import styles from "./index.module.css";

export default function Details({ data, inputLabel }) {
  const { heading, description, button, sendLink } = data;
  return (
    <div>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.description}>{description}</p>
      {button && <Button label={button.label} className={styles.button} />}
      {sendLink && (
        <div className={classNames({[styles.input_container]: true, [styles.withLabel]: !!inputLabel})}>
          {inputLabel && <p className={styles.label}>{inputLabel}</p>}
          <MobileInput />
        </div>
      )}
    </div>
  );
}
