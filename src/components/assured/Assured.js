import React from "react";
import styles from "./Assured.module.css";

const data = [
  {
    content: "Assigned ownership of your coins",
  },
  {
    content: "Cutting edge security",
  },
  {
    content: "Digital assets backed by real world assets ²",
  },
  {
    content: "Crime prevention and good-faith policy ³",
  },
];
const Assured = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Rest assured, you’re in good hands</h1>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "27px",
              }}
            >
              <img className={styles.check} src="right.png" alt="right" />
              <p className={styles.para}>{item.content}</p>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <img
            src="good_hands_desktop.png"
            className={styles.image}
          />
        </div>
      </div>
  );
};

export default Assured;
