import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import style from "./Projetos.module.css";
import ScrollReveal from "scrollreveal";
import estacionamento from "../../image/estacionamento.jpg";
import fotoTh from "../../image/fotoTh.JPG";
import semDor from "../../image/semdor.jpg";
import cardapioQRCODE from "../../image/cardapioQRCODE.jpg";
import cardapioDigital from "../../image/cardapioDigital.jpg";

// import Components
import BotaoEnviar from "../ArquivosJSX/BotaoEnviar";
import EstacionamentoProjeto from "../ArquivosJSX/EstacionamentoProjeto";
import SemDorProjeto from "../ArquivosJSX/SemDorProjeto";
import CardapioQRCODE from "../ArquivosJSX/cardapioQRCODE";
import CardapioDigital from "../ArquivosJSX/cardapioDigital";

function Main({ language, activeSection }) {
  const [projetoAtivo, setProjetoAtivo] = useState(null);

const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [mensagem, setMensagem] = useState("");

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
      cardapioqrcode: "Cardápio QR Code",
      cardapiodigital: "Cardápio Digital",
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
      cardapioqrcode: "QR Code Menu",
      cardapiodigital: "Digital Menu",
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
  };

  const projetoCardapioQRCODE = {
    titulo: translation[language].cardapioQRCODE,
    descricao:
      language === "pt"
        ? "Site para bares, restaurantes e lanchonetes com cardapio digital para ler com QRCODE."
        : "Website for bars, restaurants and cafes with digital menu to read with QRCODE.",
    imagem: cardapioQRCODE,
    link: "https://lanchonetedosamigos.netlify.app/",
    TecnologiaUsadas: language === "pt" ? "Tecnologias usadas" : "Used technologies",
    VerProjeto:
    language === "pt" ? "Ver Projeto" : "See Project",
    VerCodigoFonte:
    language === "pt" ? "Ver Código Fonte" : "View Source Code",
    linkGithub: "https://github.com/thribe1ro/cardapioLanchonete",
  };

    const projetoCardapioDigital = {
    titulo: translation[language].cardapioDigital,
    descricao:
      language === "pt"
        ? "Site para bares, restaurantes e lanchonetes com cardapio digital."
        : "Website for bars, restaurants and cafes with digital menu.",
    imagem: cardapioDigital,
    link: "https://adegaum.netlify.app/",
    TecnologiaUsadas: language === "pt" ? "Tecnologias usadas" : "Used technologies",
    VerProjeto:
    language === "pt" ? "Ver Projeto" : "See Project",
    VerCodigoFonte:
    language === "pt" ? "Ver Código Fonte" : "View Source Code",
    linkGithub: "https://github.com/thribe1ro/adegaUm",
  }


  return (

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
            <div className={style.quadradoProjetos} onClick={() => setProjetoAtivo(projetoCardapioQRCODE)}>
              <img src={cardapioQRCODE} alt="Projeto 3" />
              <p>{translation[language].cardapioqrcode}</p>
            </div>
            <div className={style.quadradoProjetos} onClick={() => setProjetoAtivo(projetoCardapioDigital)}>
              <img src={cardapioDigital} alt="Projeto 4" />
              <p>{translation[language].cardapiodigital}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section
        className={style.contato} style={{ display: activeSection === "contato" ? "flex" : "none" }} >
        <div className={style.quadradoMainContato}>
          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].NomeContato}</p>
            <input
              type="text"
              className={style.inputName}
              placeholder={translation[language].placeholderNome}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].TelContato}</p>
            <input
              type="tel"
              className={style.inputTel}
              placeholder={translation[language].placeholderTel}
              value={telefone}
              maxLength={11}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setTelefone(value);
              }}
            />
          </div>

          <div className={style.quadradoMainContantoUm}>
            <p>{translation[language].MsgContato}</p>
            <textarea
              className={style.inputMensagem}
              placeholder={translation[language].placeholderMsg}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          <div className={style.quadradoMainContantoUm}>
            <BotaoEnviar
              translation={translation}
              language={language}
              nome={nome}
              telefone={telefone}
              mensagem={mensagem}
            />
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

      {projetoAtivo && projetoAtivo.titulo === translation[language].cardapioQRCODE && (
  <CardapioQRCODE
    projeto={projetoAtivo}
    onClose={() => setProjetoAtivo(null)}
    
  />
)}

      {projetoAtivo && projetoAtivo.titulo === translation[language].cardapioDigital && (
  <CardapioDigital
    projeto={projetoAtivo}
    onClose={() => setProjetoAtivo(null)}
    
  />
)}

    </main>

    
  );
}

export default Main;
