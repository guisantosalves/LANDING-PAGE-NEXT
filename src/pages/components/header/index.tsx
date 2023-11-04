import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <Image
        src="/assets/logo.png"
        alt="sage"
        className={styles.logo}
        height={72}
        width={72}
      />
      <nav className={styles.menu}>
        <a className={styles.menuItem}>Sobre</a>
        <a className={styles.menuItem}>Habilidades</a>
        <a className={styles.menuItem}>Recrutamento</a>
      </nav>
    </header>
  );
}
