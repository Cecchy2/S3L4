/* creo le  76 celle della cartella */

const cartella = document.getElementById("cartella");

const createCell = (celle) => {
  for (let i = 0; i < celle; i++) {
    /* console.log(cartella); */
    const cella = document.createElement("div");
    cella.classList.add("celle");

    /*--assegno un id univoco ad ogni cella così da cambiarle colore quando esce il suo id*/
    cella.id = "cella" + (i + 1);

    const numeroCartella = document.createElement("h1");
    numeroCartella.innerText = i + 1;
    console.log(numeroCartella);

    cella.appendChild(numeroCartella);
    cartella.appendChild(cella);
    console.log(cartella);
  }
};

/* -------------------do una funzione onclick al bottone */

const numeriUsciti = [];
const bottone = document.getElementById("btn");

bottone.onclick = (event) => {
  let randomNumber = Math.floor(Math.random() * 76) + 1;
  console.log(randomNumber);

  numeriUsciti.push(randomNumber);
  console.log(randomNumber);

  /* ---------------cambio colore ai numeri usciti */
  const cella = document.getElementById("cella" + randomNumber);
  if (cella) {
    cella.classList.add("numeroUscito");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  createCell(76);
});
