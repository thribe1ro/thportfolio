function BotaoEnviar({ translation, language, nome, telefone, mensagem }) {
  const handleClick = () => {
    if (!nome || !telefone || !mensagem) {
      alert("Preencha todos os campos antes de enviar!");
      return;
    }

    const numeroWhatsApp = "5512988203607";
    const texto = `*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <button type="button" onClick={handleClick}>
      {translation[language].Enviar}
    </button>
  );
}

export default BotaoEnviar;
