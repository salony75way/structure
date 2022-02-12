import ArrowUp from "../../assets/img/ArrowUp.svg";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
        <img className={styles.image} src={item.symbol} />
        <span className={styles.middle}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>{item.price_usd}</p>
        </span>
          <img className={styles.arrow} src={ArrowUp} />
          <p className={styles.percentage}>{item.percentage}</p>
    </div>
  );
};

export default Card;
