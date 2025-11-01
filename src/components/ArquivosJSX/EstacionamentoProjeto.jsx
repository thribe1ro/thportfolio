import React, { useState } from "react";
import styles from "./EstacionamentoProjeto.module.css";

function EstacionamentoProjeto({ projeto, onClose }) {
  const [closing, setClosing] = useState(false);

  if (!projeto) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 500);
  };

  return (
    <div className={styles.modalFundo} onClick={handleClose}>
      <div
        className={`${styles.modalConteudo} ${closing ? styles.fechar : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalConteudoHeader}>
          <button className={styles.botaoFechar} onClick={handleClose}>
            <span>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.53 5.47c.29.29.29.76 0 1.06L5.81 11.25H20c.41 0 .75.34.75.75s-.34.75-.75.75H5.81l4.72 4.72c.29.29.29.76 0 1.06-.29.29-.76.29-1.06 0L3.47 12.53a.75.75 0 010-1.06l6-6c.29-.29.76-.29 1.06 0z"
                  fill="#fff"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className={styles.modalConteudoImagem}>
        <img src={projeto.imagem} alt={projeto.titulo} className={styles.imagemProjeto} />
        </div>
        <div className={styles.modalConteudoTextos}>
          <h2>{projeto.titulo}</h2>
          <p>{projeto.descricao}</p>
        </div>

        <div className={styles.modalConteudoTecnologias}>
          <h2>{projeto.TecnologiaUsadas}</h2>
          <div className={styles.quadradoSkills}>
            <p>JavaScript</p>
          </div>
        </div>

        <div className={styles.modalConteudoBotoes}>
          {projeto.link && (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className={styles.botaoProjeto} >
              {projeto.VerProjeto}
            </a>
          )}

          {projeto.linkGithub && (
          <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer" className={styles.botaoVerProjeto} >
            {projeto.VerCodigoFonte}
          </a>
        )}
        </div>
      </div>
    </div>
  );
}

export default EstacionamentoProjeto;
