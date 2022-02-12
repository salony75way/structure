import React, { useState } from "react";

import styles from "./index.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <p className={styles.header_text}>
          Get no-fee trading for life when you sign up today
        </p>
        <img
          src="Arrow.png"
          alt="arrow"
          width="16px"
          style={{ marginLeft: "10px" }}
        />
      </div>
      <div className={styles.header_header2}>
        <div className={styles.header_header2_left}>
          <img src="Logo.png" width="30px" height="27px" />

          <p>structure</p>
        </div>
        <div className={styles.header_header2_center}>
          <ol>
            <li className={styles.assets}>All Assets</li>
            <li>Stocks</li>
            <li>Cypto</li>
            <li>Trade</li>
          </ol>
        </div>
        <div className={styles.header_header2_right}>
          <p className={styles.header_header2_right_text}>Signup</p>
          <button className={styles.header_header2_right_btn}>
            Get the App
          </button>
        </div>
        <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
          <img src="fi_menu.svg" alt="menu" width="28px" />
        </div>
        {isOpen && (
          <div className={styles.dropdown_menu}>
            <p>All Assets</p>
            <p>Stocks</p>
            <p>Crypto</p>
            <p>Option</p>
            <p>Sign Up</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
