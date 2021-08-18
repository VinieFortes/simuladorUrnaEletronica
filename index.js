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

const bntClearBD = document.getElementById("clear");

var db = openDatabase('votos_db', '1.0', 'Banco teste', 2 * 1024 * 1024);
db.transaction(function (tx){
   tx.executeSql('CREATE TABLE candidatos_bd (nome TEXT,numero INTEGER,partido TEXT)')
})

showBD()

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
   var nomeCandidato = nomeCand.innerHTML;
   var partidoCandidato = partidoCand.innerHTML;
   db.transaction(function (tx){
      tx.executeSql('INSERT INTO candidatos_bd (nome,numero,partido) VALUES(?,?,?)', [nomeCandidato,numCand,partidoCandidato])
   })
   clear()
   showBD()
}

function mostraCand(){
   const numCand = parseInt(num01display.value + '' + num02display.value);
   switch (numCand) {

      case 12:
         nomeCand.innerHTML = "Ciro Gomes";
         partidoCand.innerHTML = "PDT";
         vice.innerHTML = "Kátia Abreu";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/ciro.png");
         return;
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

      case 18:
         nomeCand.innerHTML = "Marina Silva";
         partidoCand.innerHTML = "Rede";
         vice.innerHTML = "Eduardo Jorge";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/marina.png");
         return;

      case 30:
         nomeCand.innerHTML = "João Amoêdo";
         partidoCand.innerHTML = "NOVO";
         vice.innerHTML = "hristian Lohbauer";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/amoedo.jpg");
         return;

      case 45:
         nomeCand.innerHTML = "Geraldo Alckmim";
         partidoCand.innerHTML = "PSDB";
         vice.innerHTML = "Ana Amélia";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/geraldo.png");
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
         partidoCand.innerHTML = "das casadas";
         vice.innerHTML = "TinTim";
         divImg.style.visibility = "visible";
         imgCand.src = ("src/itatiaia.jpeg");
         return;
   }
   if(numCand !== 12 || numCand !== 13 || numCand !== 17 || numCand !== 18 ||numCand !== 24 || numCand !== 30 ||  numCand !== 45 || numCand !== 50 || numCand !== 51){
      nulo.style.visibility = "visible";
      brancoNulo.innerHTML = "VOTO NULO";
      brancoNulo2.innerHTML = "NÚMERO ERRADO";
      nomeCand.innerHTML = "Nulo";
   } else {
      nulo.style.visibility = "hidden";
   }
}


function showBD(){
   var table = document.getElementById("bd");
   db.transaction(function (tx){
      tx.executeSql('SELECT * FROM candidatos_bd', [], function (tx,resultado){
         var rows = resultado.rows;
         var tr = '';
         for(var i =0; i < rows.length; i++) {
            tr += '<tr>';
            tr += '<td class="td_bd">' + rows[i].partido + '</td>';
            tr += '<td class="td_bd">' + rows[i].numero + '</td>';
            tr += '<td class="td_bd">' + rows[i].nome + '</td>';
         }
         table.innerHTML = tr;
         if(rows.length > 0) bntClearBD.style.visibility = 'visible';
      });
   },null);
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

function clearBD(){
   db.transaction(function (tx){
      tx.executeSql('DROP TABLE candidatos_bd')
   })
   document.location.reload(true);
}