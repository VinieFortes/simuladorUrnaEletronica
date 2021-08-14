const t1 = document.getElementById("tecla1");
const t2 = document.getElementById("tecla2");
const t3 = document.getElementById("tecla3");
const t4 = document.getElementById("tecla4");
const t5 = document.getElementById("tecla5");
const t6 = document.getElementById("tecla6");
const t7 = document.getElementById("tecla7");
const t8 = document.getElementById("tecla8");
const t9 = document.getElementById("tecla9");
const t0 = document.getElementById("tecla0");

const num01display = document.getElementById("num-cand-01");
num01display.value = undefined;
const num02display = document.getElementById("num-cand-02");
num02display.value = undefined;

const nomeCand = document.getElementById("nome_cand");
const partidoCand = document.getElementById("partido_cand");
const vice = document.getElementById("vice_cand");
const divImg = document.getElementById("imagem");
const imgCand = document.getElementById("imgCand");
const nulo = document.getElementById("nulo");

const divNun = document.getElementById("numero-candidato");
const divNome = document.getElementById("nome-candidato");
const divPart = document.getElementById("partido-candidato");
const divVice = document.getElementById("vice-candidato");

const brancoNulo = document.getElementById("branco");
const brancoNulo2 = document.getElementById("numeroErrado");

var contVotos = 0;

function tecla1(){
   console.log(num01display.value);
   if (num01display.value === undefined){
      num01display.value = 1
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 1
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla2(){
   if (num01display.value === undefined){
      num01display.value = 2
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 2
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla3(){
   if (num01display.value === undefined){
      num01display.value = 3
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 3
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla4(){
   if (num01display.value === undefined){
      num01display.value = 4
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 4
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla5(){
   if (num01display.value === undefined){
      num01display.value = 5
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 5
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla6(){
   if (num01display.value === undefined){
      num01display.value = 6
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 6
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla7(){
   if (num01display.value === undefined){
      num01display.value = 7
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 7
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla8(){
   if (num01display.value === undefined){
      num01display.value = 8
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 8
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla9(){
   if (num01display.value === undefined){
      num01display.value = 9
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 9
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function tecla0(){
   if (num01display.value === undefined){
      num01display.value = 0
      num01display.innerHTML = num01display.value
   } else if (num02display.value === undefined){
      num02display.value = 0
      num02display.innerHTML = num02display.value
      mostraCand()
   }
}
function teclaBranca(){
   divNun.style.visibility = "hidden";
   divNome.style.visibility = "hidden";
   divPart.style.visibility = "hidden";
   divVice.style.visibility = "hidden";
   nulo.style.visibility = "visible";
   brancoNulo.innerHTML = "VOTO EM BRANCO"
   brancoNulo2.innerHTML = ''
   divImg.style.visibility = "hidden";
   nomeCand.innerHTML = 'Branco';
}
function teclaLaranja(){
   clear()
}

async function teclaVerde() {
   divNun.style.visibility = "hidden";
   divNome.style.visibility = "hidden";
   divPart.style.visibility = "hidden";
   divVice.style.visibility = "hidden";
   nulo.style.visibility = "visible";
   brancoNulo.innerHTML = "VOTO CONFIRMADO"
   brancoNulo2.innerHTML = ''
   divImg.style.visibility = "hidden";
   const audio = new Audio('src/som.mp3');
   await audio.play();
   const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
   await delay(3000)
   contVotos++
   const numCand = parseInt(num01display.value + '' + num02display.value);
   pass(nomeCand.innerHTML, numCand)
   clear()
}

function mostraCand(){
   const numCand = parseInt(num01display.value + '' + num02display.value);
   switch (numCand) {
      case 13:
         nomeCand.innerHTML = "Luiz Inacio Lula da Silva";
         partidoCand.innerHTML = "PT";
         vice.innerHTML = "Fernando Haddad";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/lula.jpg");
         return;

      case 17:
         nomeCand.innerHTML = "Jair Messias Bolsonaro";
         partidoCand.innerHTML = "PSL";
         vice.innerHTML = "Hamilton Mourão";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/bolsonaro.jpg");
         return;

      case 30:
         nomeCand.innerHTML = "João Amoêdo";
         partidoCand.innerHTML = "NOVO";
         vice.innerHTML = "hristian Lohbauer";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/amoedo.jpg");
         return;

      case 50:
         nomeCand.innerHTML = "Guilherme Boulos";
         partidoCand.innerHTML = "PSOL";
         vice.innerHTML = "Ricardo Nunes";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/boulos.jpg");
         return;

      case 51:
         nomeCand.innerHTML = "Cabo Daciolo";
         partidoCand.innerHTML = "Patriotas";
         vice.innerHTML = "Suelene Balduino";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/daciolo.jpg");
         return;

      case 24:
         nomeCand.innerHTML = "Guilherme Itatiaia";
         partidoCand.innerHTML = "Comedores de casadas";
         vice.innerHTML = "TinTim";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/itatiaia.jpeg");
         return;
   }
   if(numCand !== 13 || numCand !== 17 || numCand !== 24 || numCand !== 30 || numCand !== 50 || numCand !== 51){
      nulo.style.visibility = "visible";
      brancoNulo.innerHTML = "VOTO NULO";
      brancoNulo2.innerHTML = "NÚMERO ERRADO";
      nomeCand.innerHTML = "Nulo";
   } else {
      nulo.style.visibility = "hidden";
   }
}
function pass(nomecand, numcand){
   if(isNaN(numcand)) numcand = -1;
      const para = document.createElement("p");
      const node = document.createTextNode(numcand + " " +nomecand);
      para.appendChild(node);
      const element = document.getElementById("div1");
      element.appendChild(para);
}
function clear(){
   num01display.value = undefined
   num02display.value = undefined
   num01display.innerHTML = ''
   num02display.innerHTML = ''

   nomeCand.innerHTML = '';
   partidoCand.innerHTML = '';
   vice.innerHTML = '';
   imgCand.src = ('');

   divNun.style.visibility = "visible";
   divNome.style.visibility = "visible";
   divPart.style.visibility = "visible";
   divVice.style.visibility = "visible";
   divImg.style.visibility = "hidden";
   nulo.style.visibility = "hidden";
}