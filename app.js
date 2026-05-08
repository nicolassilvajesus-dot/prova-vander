let frases = ["O único limite que existe é aquele que você impõe na sua própria mente.", "Levante, sacuda a poeira e comece de novo. Cada dia é uma nova chance de vencer.", "Não espere o momento perfeito. Comece agora e torne este momento perfeito."];
let frasesCopiada = [...frase];
function geradorMensagem(){
  if(frases.length==0){
    frases=[...frasesCopiada];
  }
  let indiceGerado = Math.floor(Math.random()*(frases.length));
  let fraseGerada = frases[indiceGerado];
}
  console.log(fraseGerada)
  document.querySelector("#msg").textContent=fraseGerada;

  frases.splice(indiceGerado,1);