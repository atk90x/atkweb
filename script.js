writeRandomQuote = function () {
    let quotes = [
    "Me cago en el estilo de Zara y Desigual - ghandi",
    "Dadle una pelota a cada uno y listo. - Jorge Luis Borges",
    "Me encantan los libros de autoayuda. - Leon Tolstoy"
  ]
    let rand = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText = quotes[rand];
  }

function copyDate() {
  let footer = document.getElementById("copyright")
  let copyrightText = "Copyright Alex Tkalenko ©" + new Date().getFullYear()
  footer.innerText = copyrightText
}

copyDate();
writeRandomQuote();