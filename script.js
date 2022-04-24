writeRandomQuote = function () {
    let quotes = [
    "Me cago en el estilo de Zara y Desigual - ghandi",
    "Dádle una pelota a cada uno y listo. - Jorge Luis Borges",
    "M encantan los libros de autoayuda. - Leo Tolstoy"
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