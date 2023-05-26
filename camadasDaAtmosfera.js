//solicita input do usuário e converte em núm inteiro
const input = prompt("Digite a altitude:");
const altitude = parseInt(input);

//trata exceções ñ citadas no enunciado da tarefa, como:
//altitude maior que a última camada, entradas ñ numerais e núm negativos
if (!isNaN(altitude)) {
  if (0 < altitude && altitude <= 20) {
    console.log("TROPOSFERA");
  } else if (20 < altitude && altitude <= 50) {
    console.log("ESTRATOSFERA");
  } else if (50 < altitude && altitude <= 80) {
    console.log("MESOSFERA");
  } else if (80 < altitude && altitude <= 450) {
    console.log("TERMOSFERA");
  } else if (450 < altitude && altitude <= 900) {
    console.log("EXOSFERA");
  } else if (900 < altitude) {
    console.log("FORA DA ATMOSFERA");
  } else {
    console.log("A altitude não pode ser um número negativo, tente novamente.");
  }
} else {
  console.log("A entrada deve ser um número inteiro, tente novamente.");
}

//RESOLUÇÃO USANDO FUNÇÃO E SEM TRATAMENTO DE EXCEÇÕES

function determinar_camada(altitude) {
  if (altitude <= 20) {
    return "TROPOSFERA";
  } else if (20 < altitude && altitude <= 50) {
    return "ESTRATOSFERA";
  } else if (50 < altitude && altitude <= 80) {
    return "MESOSFERA";
  } else if (80 < altitude && altitude <= 450) {
    return "TERMOSFERA";
  } else if (450 < altitude && altitude <= 900) {
    return "EXOSFERA";
  }
}
var altitude = 15
var camada = determinar_camada(altitude)
console.log(camada)
