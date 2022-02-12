import classNames from "classnames";
import styles from "./index.module.css";

const Button = ({ label, className }) => {
  return (
    <button className={classNames({[styles.button]: true, [className]: !!className})}>
      {label}
    </button>
  );
};

export default Button;
