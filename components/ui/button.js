import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
