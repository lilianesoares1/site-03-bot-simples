
window.onload = function () {
  let bot = "Lilly";

  const apresentacao = "Olá, eu sou a " + bot + ".";
  const saudacao = "Estou empolgada para falar com vocês.";
  const introducao = "Hoje eu vim dizer a vocês a minha comida favorita.";
  const comidafavorita = "Estrogonofe de Frango";
  const comida = "A minha comida favorita é " + comidafavorita + ".";

  const mensagemFinal = `
    ${apresentacao}
    ${saudacao}
    ${introducao}
    ${comida}
  `;

  document.getElementById("mensagem").innerHTML = mensagemFinal;
};
