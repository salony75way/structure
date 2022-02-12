import React from "react";
import createImg from '../../assets/svg/create_account.svg';
import depositImg from "../../assets/svg/deposit.svg";
import styles from "./ReadyTrade.module.css";
import tradingImg from '../../assets/svg/start_trading.svg';

const data = [
  {
    id: 1,
    title: "Create an account",
    description: "Download the Structure Mobile App and create your account.",
    img: createImg,
  },
  {
    id: 2,
    title: "Deposit crypto",
    description: "Deposit crypto to your Structure Mobile App.",
    img: depositImg
  },
  {
    id: 3,
    title: "Start trading",
    description: "You’re ready to start trading crypto and stocks.",
    img: tradingImg,
  },
];

const ReadyTrade = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 style={{ textAlign: "center" }}>Ready, set, trade</h1>
        <p style={{ textAlign: "center" }}>
          Setup an account and start trading in less than 5 minutes.
        </p>
      </div>
      <div className={styles.feature}>
        {data.map((item) => (
          <div key={item.id} className={styles.feature_card}>
            <img src={item.img} />
            <h6 className={styles.title}>{item.title}</h6>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyTrade;
