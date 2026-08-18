import { useState } from "react";
import styles from "./Header.module.css";

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerContentLogo}>
        <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className={styles.headerContentText}>
        <h1>Arquivo</h1>
        <h1>Editar</h1>
        <h1>Seleção</h1>
        <h1>Exibir</h1>
        <h1>Acessar</h1>
        </div>
        <div className={styles.headerContentSearch}>
        <h1>Thiago Ribeiro - Portfolio</h1>
        </div>
        <div className={styles.headerContentClosed}>
          <div className={styles.headerContentSVG}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11H18V13H6V11Z" fill="#5e5e5f"></path> </g></svg>
          </div>
          <div className={styles.headerContentSVG}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H8C6.34315 1 5 2.34315 5 4V5H4C2.34315 5 1 6.34315 1 8V20C1 21.6569 2.34315 23 4 23H16C17.6569 23 19 21.6569 19 20V19H20C21.6569 19 23 17.6569 23 16V4ZM19 17H20C20.5523 17 21 16.5523 21 16V4C21 3.44772 20.5523 3 20 3H8C7.44772 3 7 3.44772 7 4V5H16C17.6569 5 19 6.34315 19 8V17ZM16 7C16.5523 7 17 7.44772 17 8V20C17 20.5523 16.5523 21 16 21H4C3.44772 21 3 20.5523 3 20V8C3 7.44772 3.44772 7 4 7H16Z" fill="#5e5e5f"></path> </g></svg>
          </div>
          <div className={styles.headerContentSVG}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 13.4142L16.9497 18.364L18.364 16.9498L13.4142 12L18.364 7.05026L16.9497 5.63605L12 10.5858L7.05025 5.63605L5.63604 7.05026L10.5858 12L5.63604 16.9498L7.05025 18.364L12 13.4142Z" fill="#5e5e5f"></path> </g></svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
