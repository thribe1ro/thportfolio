import { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import fotoHome from "../../image/home.png";
import fotoProjetos from "../../image/projetos.png";
import fotoContato from "../../image/contato.png";

function Footer({ language, setActiveSection }) {
  const translation = {
    pt: {
      home: "Início",
      projetos: "Projetos",
      contato: "Contato",
    },
    en: {
      home: "Home",
      projetos: "Projects",
      contato: "Contact",
    },
  };

  const [active, setActive] = useState("inicio");

  useEffect(() => {
    setActiveSection(active);
  }, [active, setActiveSection]);

  return (
    <footer className={styles.footer}>
      <button className={`${styles.quadradosFooter} ${ active === "inicio" ? styles.quadradosFooterAtivo : "" }`}
        onClick={() => setActive("inicio")}
      >
        <img src={fotoHome} alt="Início" className={ active === "inicio" ? styles.imgAtiva : styles.imgInativa } />
        <p className={ active === "inicio" ? styles.textoFooterAtivo : styles.textoFooter } >
          {translation[language].home}
        </p>
      </button>

      <button className={`${styles.quadradosFooter} ${ active === "projetos" ? styles.quadradosFooterAtivo : "" }`} onClick={() => setActive("projetos")} >
        <img src={fotoProjetos} alt="Projetos" className={ active === "projetos" ? styles.imgAtiva : styles.imgInativa } />
        <p className={ active === "projetos" ? styles.textoFooterAtivo : styles.textoFooter } >
          {translation[language].projetos}
        </p>
      </button>

      <button className={`${styles.quadradosFooter} ${ active === "contato" ? styles.quadradosFooterAtivo : "" }`} onClick={() => setActive("contato")} >
        <img src={fotoContato} alt="Contato" className={active === "contato" ? styles.imgAtiva : styles.imgInativa}/>
        <p className={ active === "contato" ? styles.textoFooterAtivo : styles.textoFooter }>
          {translation[language].contato}
        </p>
      </button>
    </footer>
  );
}

export default Footer;
