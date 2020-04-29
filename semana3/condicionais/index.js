/*EXERCÍCIO 1*/

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// R. % mostra o restode uma divisão neste caso, quando uma divisão por 2 não tem resto "Passou no teste", quando tem resto "Não passou no teste" 

/*EXERCÍCIO 2*/

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


/* a. Para que serve o código acima?*/
// R. Para consulta de preços de frutas

/* b. Qual será a mensagem impressao no console, se o valor de fruta for "Maçã"?*/
// R. O preço da fruta  Maça  é  R$  5

/* c. Considere que você vá ao mercado com o objetivo de comprar:
2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?*/
const laranja = 2*3.5
const maca = 2.25
const banana = 3*5
const uva = 1

let valorTotal = Number(laranja) + Number(maca) + Number(banana) + Number(uva) 
console.log("O valor total da compra é", valorTotal , "reais")
// R. no console "O valor total da compra é 25.25 reais"

/* d. Considere que um usuário queira comprar uma Pêra, 
Qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult
(o break indicado pelo comentário "BREAK PARA O ITEM d.")?*/
// R. O preço da fruta  Pêra  é  R$  5

/*EXERCÍCIO 4*/

/*a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**.
O que acontece com o seu programa se os 2 números forem iguais?
(é só testar e colocar um comentário descrevendo o que aconteceu)*/
let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")

numero1 = Number(numero1)
numero2 = Number(numero2)

if (numero1 > numero2) { //O primeiro número é maior que o segundo número
    console.log(numero1, numero2)
    // R. digitando 4 e 8 no console = "8 4"
} else if (numero1 < numero2) { //O primeiro número é menor que o segundo número
    console.log(numero2, numero1)
    // R. digitando 20 e 10 no console  = "20 10"
} else {
    console.log("O primeiro número é igual ao segundo número")
    // R. no console digitando numeros iguais = " primeiro número é igual ao segundo número"
}

/*b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**.
O que acontece como seu programa se os 3 números forem iguais?
(é só testar e colocar um comentário descrevendo o que aconteceu)*/

/**NÃO CONSEGUI SOLUÇÃO PARA ESTE EXERCÍCIO */
/*
 PAREI NESSE CÓDIGO
let numero3 = prompt("Digite o terceiro número:")
let numero4 = prompt("Digite o quarto número:")
let numero5 = prompt("Digite o quinto número:")

numero3 = Number(numero3)
numero4 = Number(numero4)
numero5 = Number(numero5)

if (numero3 > numero4 > numero5) { //O primeiro número é o maior
    console.log(numero3, numero4, numero5)    
    // R. no console digitando 4 e 8 = "8 4"
} else if (numero3 < numero4 < numero5) { //O segundo número é o maior
    console.log(numero5, numero4, numero3)
    // R. no console digitando 20 e 1011 = "20 10"
} else if (numero3 > numero4 < numero5) { //O terceiro número é o maior
    console.log(numero5, numero3, numero4)    
    // R. no console digitando 20 e 10 = "20 10"    
} else {
    console.log("Todos números são iguais por favor insira numeros diferentes")    
    // R. no console digitando numeros iguais = " primeiro número é igual ao segundo número"
}
*/
/*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais,
mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/
