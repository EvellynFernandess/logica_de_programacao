// ?? C�DIGO 1 � Categoria por idade
let categoria = Number(prompt("Digite sua idade: "));
console.log("Categoria: " + categoria);

if (categoria >= 60) {
  console.log("Categoria idosa");
} else if (categoria > 18 && categoria < 60) {
  console.log("Categoria adulta");
} else {
  console.log("Categoria jovem");
}

console.log("----------------------------");

// ?? C�DIGO 2 � Situa��o de voto
let idade = Number(prompt("Digite sua idade para votar: "));

if (idade < 70 && idade >= 18) {
  console.log("Voto obrigat�rio");
} else if (idade >= 70) {
  console.log("Voto facultativo");
} else if (idade >= 16 && idade < 18) {
  console.log("Voto facultativo");
} else {
  console.log("N�o pode votar");
}

console.log("----------------------------");

// ?? C�DIGO 3 � N�mero positivo, negativo ou inv�lido
let numero = Number(prompt("Digite um n�mero: "));

if (numero < 0) {
  console.log("Negativo");
} else if (numero > 0) {
  console.log("Positivo");
} else {
  console.log("N�mero inv�lido");
}

console.log("----------------------------");

// ?? C�DIGO 4 � Tipo de combust�vel
let combustivel = prompt("Digite um tipo de combust�vel: ");

if (combustivel == "Gasolina") {
  console.log("Voc� escolheu gasolina");
} else if (combustivel == "Alcool") {
  console.log("Voc� escolheu �lcool");
} else {
  console.log("Combust�vel n�o dispon�vel");
}

console.log("----------------------------");

// ?? C�DIGO 5 � Velocidade
let velocidade = Number(prompt("Digite uma velocidade: "));

if (velocidade <= 60) {
  console.log("Dentro do limite");
} else if (velocidade == 75) {
  console.log("Aten��o");
} else if (velocidade >= 80) {
  console.log("Multado");
} else {
  console.log("Velocidade moderada");
}

console.log("-----------

