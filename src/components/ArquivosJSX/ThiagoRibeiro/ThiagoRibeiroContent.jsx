import React, { useState } from "react";
import styles from "./ThiagoRibeiroContent.module.css";

function ThiagoRibeiroContent() {

  return (
    <div className={styles.Content}>
      <div className={styles.ContentLeft}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p></p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
      <div className={styles.ContentRight}>
        <p className={styles.TextoAzul}># Portfolio Thiago Ribeiro</p>
        <p>2</p>
        <p className={styles.TextoAzul}># Sobre mim</p>
        <p>Olá! Sou Tiago Ribeiro, estudante de Análise e Desenvolvimento de Sistemas, com foco no desenvolvimento Front-End.</p>
        <p>Sempre gostei de tecnologia e de criar soluções que façam sentido para as pessoas. Foi isso que me motivou a seguir na área de desenvolvimento, onde venho estudando e colocando em prática conhecimentos em HTML, CSS, JavaScript, React, Next.js e React Native.</p>
        <p>Gosto de transformar ideias em interfaces modernas, responsivas e intuitivas, sempre buscando escrever um código organizado e aprender novas tecnologias. Acredito que a evolução acontece na prática,</p>
        <p> por isso estou constantemente desenvolvendo projetos para aprimorar minhas habilidades e enfrentar novos desafios.</p>
        <p>Meu objetivo é iniciar minha carreira como desenvolvedor, contribuindo com dedicação, vontade de aprender e crescimento contínuo. Estou sempre aberto a novos desafios e oportunidades que me permitam evoluir profissionalmente e entregar soluções de qualidade.</p>
        <p className={styles.TextoAzul}># Habilidades</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Next.js</p>
        <p>React Native</p>
      </div>
    </div>
  );
}

export default ThiagoRibeiroContent;
