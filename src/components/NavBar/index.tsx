import React, { ReactNode } from "react";
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Close } from './close.svg';
import styles from "./NavBar.module.scss";

interface INavBar {
  children: ReactNode;
}

const Card = (props: INavBar) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
      <Logo/>
      <p>CoreNotes</p>
      </div>
      <div className={styles.content}>{props.children}</div>
      <Close className={styles.Close}/>
    </div>
  );
};

export default Card;
