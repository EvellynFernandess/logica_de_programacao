let numero1 = Number(prompt(&quot;Digite um n�mero: &quot;))
let numero2 = Number(prompt(&quot;Digite outro n�mero: &quot;))
let operacao = prompt(&quot;Qual a sua opera��o? Digite o simbolo: &quot;)
let resultado = 0

function soma(numero1, numero2){
return resultado = numero1 + numero2
}

function subtracao(numero1, numero2){
return resultado = numero1 - numero2
}

function multiplicacao(numero1, numero2){
return resultado = numero1 * numero2
}

function divisao(numero1, numero2){
return resultado = numero1 / numero2
}

if (operacao == &quot;+&quot;){
resultado = soma(numero1, numero2)
} else if (operacao == &quot;-&quot;){
resultado = subtracao(numero1, numero2)
}else if (operacao == &quot;*&quot;){
resultado = multiplicacao(numero1, numero2)
}else (operacao == &quot;/&quot;)[
resultado = divisao(numero1, numero2)]

console.log(&quot;O resultado �&quot;, resultado)