import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import style from "./Projetos.module.css";
import ScrollReveal from "scrollreveal";
import estacionamento from "../../image/estacionamento.jpg";
import fotoTh from "../../image/fotoTh.JPG";
import semDor from "../../image/semdor.jpg";

// import Components
import BotaoEnviar from "../ArquivosJSX/BotaoEnivar";
import EstacionamentoProjeto from "../ArquivosJSX/EstacionamentoProjeto";
import SemDorProjeto from "../ArquivosJSX/SemDorProjeto";

function Main({ language, activeSection }) {
  const [projetoAtivo, setProjetoAtivo] = useState(null);

  const primeiroQuadradoRef = useRef(null);
  const quadradoUm = useRef(null);
  const quadradoDois = useRef(null);
  const quadradoTres = useRef(null);
  const quadradoQuatro = useRef(null);

  useEffect(() => {
    if (primeiroQuadradoRef.current) {
      ScrollReveal().reveal(primeiroQuadradoRef.current, {
        origin: "left",
        distance: "100px",
        duration: 1000,
        easing: "ease-in-out",
        reset: false,
      });
    }
    if (quadradoUm.current) {
      ScrollReveal().reveal(quadradoUm.current, {
        origin: "left",
        distance: "100px",
        duration: 500,
        easing: "ease-in-out",
        reset: true,
      });
    }
    if (quadradoDois.current) {
      ScrollReveal().reveal(quadradoDois.current, {
        origin: "right",
        distance: "100px",
        duration: 500,
        easing: "ease-in-out",
        reset: true,
      });
    }
    if (quadradoTres.current) {
      ScrollReveal().reveal(quadradoTres.current, {
        origin: "left",
        distance: "100px",
        duration: 500,
        easing: "ease-in-out",
        reset: true,
      });
    }
    if (quadradoQuatro.current) {
      ScrollReveal().reveal(quadradoQuatro.current, {
        origin: "right",
        distance: "100px",
        duration: 500,
        easing: "ease-in-out",
        reset: true,
      });
    }
  }, []);

  const translation = {
    pt: {
      dev: "Desenvolvedor Front-End",
      cidade: "São José dos Campos - SP",
      texto:
        "Sou desenvolvedor front-end apaixonado por tecnologia e design. Tenho experiência com HTML, CSS e JavaScript, e estou sempre em busca de aprimorar minhas habilidades e criar interfaces modernas, funcionais e responsivas. Gosto de transformar ideias em experiências digitais que unem estética e performance.",
      skills: "Habilidades",
      MeusProjetos: "Meus Projetos",
      estacionamento: "Estacionamento",
      consultorio: "Consultório",
      NomeContato: "Nome",
      TelContato: "Telefone",
      MsgContato: "Mensagem",
      Enviar: "Enviar",
      placeholderNome: "Seu nome",
      placeholderTel: "Seu telefone",
      placeholderMsg: "Sua mensagem",
      curriculo: "Baixar Currículo",
    },
    en: {
      dev: "Front-End Developer",
      cidade: "São José dos Campos - SP",
      texto:
        "I'm a front-end developer with a passion for technology and design. I have experience with HTML, CSS, and JavaScript, and I'm always looking to improve my skills and create modern, functional, and responsive interfaces. I enjoy transforming ideas into digital experiences that combine aesthetics and performance.",
      skills: "Skills",
      MeusProjetos: "My Projects",
      estacionamento: "Parking",
      consultorio: "Dental Office",
      NomeContato: "Name",
      TelContato: "Phone",
      MsgContato: "Message",
      Enviar: "Send",
      placeholderNome: "Your name",
      placeholderTel: "Your phone",
      placeholderMsg: "Your message",
      curriculo: "Download Curriculum", 
    },
  };

  const projetoEstacionamento = {
    titulo: translation[language].estacionamento,
    descricao:
      language === "pt"
        ? "Sistema de controle de estacionamento com cálculo automático de tempo e valor."
        : "Parking control system with automatic time and value calculation.",
    imagem: estacionamento,
    link: "https://sanjaparking.netlify.app/",
    TecnologiaUsadas: language === "pt" ? "Tecnologias usadas" : "Used technologies",
    VerProjeto:
    language === "pt" ? "Ver Projeto" : "See Project",
    VerCodigoFonte:
    language === "pt" ? "Ver Código Fonte" : "View Source Code",
    linkGithub: "https://github.com/thribe1ro/estacionamento",
  };

  const projetoSemDor = {
    titulo: translation[language].consultorio,
    descricao:
      language === "pt"
        ? "Site com intuito de ajudar a pacientes de todas as idades a marcarem uma consulta de maneira fácil."
        : "Website with the purpose of helping patients of all ages to make an easy appointment.",
    imagem: semDor,
    link: "https://semdorodonto.netlify.app/",
    TecnologiaUsadas: language === "pt" ? "Tecnologias usadas" : "Used technologies",
    VerProjeto:
    language === "pt" ? "Ver Projeto" : "See Project",
    VerCodigoFonte:
    language === "pt" ? "Ver Código Fonte" : "View Source Code",
    linkGithub: "https://github.com/thribe1ro/SemDorOdontologia",
  }

  return (
    <body>
    <main>
      {/* --- INÍCIO --- */}
      <section
        className={style.inicio}
        style={{ display: activeSection === "inicio" ? "flex" : "none" }}
      >
        <section ref={primeiroQuadradoRef} className={styles.primeiroQuadrado}>
          <div className={styles.imagem}>
            <img src={fotoTh} alt="Foto de Thiago Ribeiro" />
          </div>
          <div className={styles.Titulo}>
            <h1 className={styles.nomeMain}>Thiago Ribeiro</h1>
            <p>{translation[language].dev}</p>
            <p>{translation[language].cidade}</p>
          </div>
          <div className={styles.subTitulo}>
            <p>{translation[language].texto}</p>
          </div>
        </section>

        <section className={styles.segundoQuadrado}>
          <div className={styles.textoQuadradoHabilidade}>
            <h1>{translation[language].skills}</h1>
          </div>
          <div className={styles.quadradoHabilidade}>
            <div ref={quadradoUm} className={styles.quadradoSkills}>
              <p>Design UI/UX</p>
            </div>
            <div ref={quadradoDois} className={styles.quadradoSkills}>
              <p>JavaScript</p>
            </div>
            <div ref={quadradoTres} className={styles.quadradoSkills}>
              <p>SEO</p>
            </div>
            <div ref={quadradoQuatro} className={styles.quadradoSkills}>
              <p>ReactJS</p>
            </div>
          </div>
        </section>
        <section className={styles.terceiroQuadrado}>
          <div className={styles.textoQuadradoCurriculo}>
          <h1>{translation[language].curriculo}</h1>
          </div>
          <div className={styles.quadradoBaixarCurriculo}>
          <button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.1198 22 8.79986 22H12.5M14 11H8M10 15H8M16 7H8M15 19L18 22M18 22L21 19M18 22V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
          </div>
          </section>
      </section>

      {/* --- PROJETOS --- */}
      <section
        className={style.projetos}
        style={{ display: activeSection === "projetos" ? "flex" : "none" }}
      >
        <div className={style.quadradoMainProjetos}>
          <div className={style.textoQuadradoMainProjetos}>
            <h1>{translation[language].MeusProjetos}</h1>
          </div>
          <div className={style.ProjetosQuadrados}>
            <div
              className={style.quadradoProjetos} onClick={() => setProjetoAtivo(projetoEstacionamento)}>
              <img src={estacionamento} alt="Projeto 1" />
              <p>{translation[language].estacionamento}</p>
            </div>
            <div className={style.quadradoProjetos} onClick={() => setProjetoAtivo(projetoSemDor)}>
              <img src={semDor} alt="Projeto 2" />
              <p>{translation[language].consultorio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section
        className={style.contato}
        style={{ display: activeSection === "contato" ? "flex" : "none" }}
      >
        <div className={style.quadradoMainContato}>
          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].NomeContato}</p>
            <input
              type="text"
              id="nome"
              className={style.inputName}
              placeholder={translation[language].placeholderNome}
            />
          </div>
          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].TelContato}</p>
            <input
              type="tel"
              id="telefone"
              inputMode="numeric"
              pattern="[0-9]{11}"
              maxLength="11"
              className={style.inputTel}
              placeholder={translation[language].placeholderTel}
            />
          </div>
          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].MsgContato}</p>
            <textarea
              id="mensagem"
              className={style.inputMensagem}
              placeholder={translation[language].placeholderMsg}
            />
          </div>
          <div className={style.quadradoMainContantoUm}>
            <BotaoEnviar translation={translation} language={language} />
          </div>
        </div>
      </section>

            {/* --- MODAL DE PROJETO --- */}
      {projetoAtivo && projetoAtivo.titulo === translation[language].estacionamento && (
  <EstacionamentoProjeto
    projeto={projetoAtivo}
    onClose={() => setProjetoAtivo(null)}
  />
)}

      {projetoAtivo && projetoAtivo.titulo === translation[language].consultorio && (
  <SemDorProjeto
    projeto={projetoAtivo}
    onClose={() => setProjetoAtivo(null)}
    
  />
)}

    </main>
    </body>
    
  );
}

export default Main;
