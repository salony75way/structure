import Footer from "../common/Footer/index";
import Header from "../common/Header";
import React from "react";
import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
