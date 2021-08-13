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
const num02display = document.getElementById("num-cand-02");

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


function tecla1(){
   console.log(num01display.value)
   if (num01display.value === undefined){
      num01display.value = 1
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 1
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla2(){
   if (num01display.value === undefined){
      num01display.value = 2
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 2
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla3(){
   if (num01display.value === undefined){
      num01display.value = 3
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 3
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla4(){
   if (num01display.value === undefined){
      num01display.value = 4
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 4
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla5(){
   if (num01display.value === undefined){
      num01display.value = 5
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 5
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla6(){
   if (num01display.value === undefined){
      num01display.value = 6
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 6
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla7(){
   if (num01display.value === undefined){
      num01display.value = 7
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 7
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla8(){
   if (num01display.value === undefined){
      num01display.value = 8
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 8
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla9(){
   if (num01display.value === undefined){
      num01display.value = 9
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 9
      num02display.innerHTML = num02display.value.toString()
      mostraCand()
   }
}
function tecla0(){
   if (num01display.value === undefined){
      num01display.value = 0
      num01display.innerHTML = num01display.value.toString()
   } else if (num02display.value === undefined){
      num02display.value = 0
      num02display.innerHTML = num02display.value.toString()
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
}
function teclaLaranja(){
   location.reload(true);
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
   location.reload(true);
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
   }
   if(numCand !== 13 || numCand !== 17 || numCand !== 30 || numCand !== 50 || numCand !== 51){
      nulo.style.visibility = "visible";
   } else {
      nulo.style.visibility = "hidden";
   }
}