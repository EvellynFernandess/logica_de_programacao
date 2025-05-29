// ?? CÓDIGO 1 — Categoria por idade
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

// ?? CÓDIGO 2 — Situação de voto
let idade = Number(prompt("Digite sua idade para votar: "));

if (idade < 70 && idade >= 18) {
  console.log("Voto obrigatório");
} else if (idade >= 70) {
  console.log("Voto facultativo");
} else if (idade >= 16 && idade < 18) {
  console.log("Voto facultativo");
} else {
  console.log("Não pode votar");
}

console.log("----------------------------");

// ?? CÓDIGO 3 — Número positivo, negativo ou inválido
let numero = Number(prompt("Digite um número: "));

if (numero < 0) {
  console.log("Negativo");
} else if (numero > 0) {
  console.log("Positivo");
} else {
  console.log("Número inválido");
}

console.log("----------------------------");

// ?? CÓDIGO 4 — Tipo de combustível
let combustivel = prompt("Digite um tipo de combustível: ");

if (combustivel == "Gasolina") {
  console.log("Você escolheu gasolina");
} else if (combustivel == "Alcool") {
  console.log("Você escolheu álcool");
} else {
  console.log("Combustível não disponível");
}

console.log("----------------------------");

// ?? CÓDIGO 5 — Velocidade
let velocidade = Number(prompt("Digite uma velocidade: "));

if (velocidade <= 60) {
  console.log("Dentro do limite");
} else if (velocidade == 75) {
  console.log("Atenção");
} else if (velocidade >= 80) {
  console.log("Multado");
} else {
  console.log("Velocidade moderada");
}

console.log("-----------

