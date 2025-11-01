import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("pt");
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <>
      <Header onLanguageChange={setLanguage} activeSection={activeSection} />
      <Main language={language} activeSection={activeSection} />
      <Footer language={language} setActiveSection={setActiveSection}/>
    </>
  );
}

export default App;
