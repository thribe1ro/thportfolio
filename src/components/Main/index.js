import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import ThiagoRibeiro from "../ArquivosJSX/ThiagoRibeiro/ThiagoRibeiro.jsx";
import ThiagoRibeiroContent from "../ArquivosJSX/ThiagoRibeiro/ThiagoRibeiroContent.jsx";

const Main = () => {

  return (

    <main className={styles.containerMain}>
      <section className={styles.ExploradorContent}>
        <div className={styles.ExploradorContentLeft}>
          <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20V8.34162C20 7.8034 19.7831 7.28789 19.3982 6.91161L14.9579 2.56999C14.5842 2.20459 14.0824 2 13.5597 2L6 2C4.89543 2 4 2.89543 4 4Z" stroke="#fff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 2V6C14 7.10457 14.8954 8 16 8H20" stroke="#fff" stroke-width="0.72" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div className={styles.ExploradorContentRight}>
        <div className={styles.ExploradorContentHeader}>
          <h1>EXPLORADOR</h1>
        </div>
        <div className={styles.ExploradorContentBody}>
          <div className={styles.ExploradorContentBodySVG}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#cccbcb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <h2>PROJETOS</h2>
        </div>
        </div>
      </section>
      <section className={styles.OpenProjetosContent}>
        <ThiagoRibeiro />
      </section>
      <section className={styles.AreaContent}>
      <ThiagoRibeiroContent />
      </section>
    </main>

    
  );

}
export default Main;
