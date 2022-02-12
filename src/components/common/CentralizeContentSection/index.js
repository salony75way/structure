import classNames from 'classnames';
import styles from './index.module.css';

export default function CentralizeContentSection({children, fullWidth, reverse}) {
  return (
    <div className={classNames({[styles.container]: true, [styles.fullWidth]: fullWidth, [styles.reverse]: reverse})}>
      {children}
    </div>
  )
}


export const Left = ({ children, shouldHide }) => {
  return (
    <div className={classNames({[styles.left]: true, [styles.hideMD]: shouldHide})}>
     {children}
    </div>
  );
};

export const Right = ({ children, shouldHide }) => {
  return (
    <div className={classNames({[styles.right]: true, [styles.hideMD]: shouldHide})}>
      {children}
    </div>
  );
};