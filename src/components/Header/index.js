import { useState } from "react";
import styles from "./Header.module.css";

function Header({ onLanguageChange, activeSection }) {
  const ShowInicio = activeSection === "inicio";
  const ShowProjetos = activeSection === "projetos";
  const ShowContato = activeSection === "contato";

  const translation = {
    pt: {
      projetos: "Projetos",
      contato: "Contato",
    },
    en: {
      projetos: "Projects",
      contato: "Contact",
    },
  };

  const [language, setLanguage] = useState("pt");

  const handleChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);

    if (typeof onLanguageChange === "function") {
      onLanguageChange(newLang);
    }
  };


  return (
    <header className={styles.header}>
        <section className={styles.tradutor} style={{ display: ShowInicio ? "flex" : "none" }}>
      <select className={styles.language} value={language} onChange={handleChange}>
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </select>
        </section>
      <section className={styles.quadradoProjetos} >
          <section className={styles.title} style={{ display: ShowProjetos ? "flex" : "none" }}>
          <h1>{translation[language].projetos}</h1>
      </section>
        <section className={styles.title} style={{ display: ShowContato ? "flex" : "none" }}>
          <h1>{translation[language].contato}</h1>
        </section>
      </section>
      
    </header>
  );
}

export default Header;
