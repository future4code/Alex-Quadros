/* EXERCÍCIO 1
O que o código abaixo está fazendo? Qual o resultado impresso no console? */

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
/* Está pegnado o valor de "i" e somando a ultima contagem total ate qie "i" chegue a 15 
Resultado no console "105"*/

/* ECERCÍCIO 2 */
 const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
 const novaLista = []
 const numero = 5
 for(const item of lista) {
   if(item%numero === 0) {
     novaLista.push(item)
   }
 }
 console.log(novaLista)

/* a. O que o comando .push faz? */
// Controi uma nova lista array com numeros divisiveis por 5 e que não tem resto

/* b. Qual o valor impresso no console? */
/* Resposta no console
(4) [10, 15, 25, 30]
  0: 10
  1: 15
  2: 25
  3: 30
  length: 4
__proto__: Array(0) */


/* Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4 */

/* Resposta no console com varivavel igual a 3
(6) [12, 15, 18, 21, 27, 30]
  0: 12
  1: 15
  2: 18
  3: 21
  4: 27
  5: 30
  length: 6
__proto__: Array(0) */

/* Resposta no console com varivavel igual a 4
[12]
  0: 12
  length: 1
__proto__: Array(0) */

/* ECERCÍCIO 3

a. Escreva um programa que devolva o maior e menor
números contidos no array original */
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maxNumeroAtual = array[0]
let minNumeroAtual = array[0]

for (let i = 0; i < array.length; i++) {
  if (array[i] > maxNumeroAtual) 
    maxNumeroAtual = array[i]
    
  if (array[i] < minNumeroAtual) 
    minNumeroAtual = array[i]
  
  }

console.log("O maior numero é", maxNumeroAtual, "e o menor é", minNumeroAtual)
// Resposta no console "O maior numero é 130 e o menor é 21"

/* b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10. */

let novoarray = []

for (let numero of array) {
    novoarray.push(numero/10)  
  } 
  
  console.log(novoarray)
// Resposta no console "[8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]"

/* c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original*/

let pararray = []

for (let numero of array) {
    if (numero%2 === 0) {
      pararray.push(numero)      
      }     
  }   
  console.log(pararray)
  // Resposta no console "[80, 30, 130, 40, 60, 70, 120, 90, 110]"

/* d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero" */
let tamanhoDoArray = array.length

console.log("O tamanho do elemento é", tamanhoDoArray)

console.log("O elemento do index 0 é", array[0])
console.log("O elemento do index 1 é", array[1])
console.log("O elemento do index 2 é", array[2])
console.log("O elemento do index 3 é", array[3])
console.log("O elemento do index 4 é", array[4])
console.log("O elemento do index 5 é", array[5])
console.log("O elemento do index 6 é", array[6])
console.log("O elemento do index 7 é", array[7])
console.log("O elemento do index 8 é", array[8])
console.log("O elemento do index 9 é", array[9])
console.log("O elemento do index 10 é", array[10])
console.log("O elemento do index 11 é", array[11])
/* Resposta no console:
O tamanho do elemento é 12
index.js:102 O elemento do index 0 é 80
index.js:103 O elemento do index 1 é 30
index.js:104 O elemento do index 2 é 130
index.js:105 O elemento do index 3 é 40
index.js:106 O elemento do index 4 é 60
index.js:107 O elemento do index 5 é 21
index.js:108 O elemento do index 6 é 70
index.js:109 O elemento do index 7 é 120
index.js:110 O elemento do index 8 é 90
index.js:111 O elemento do index 9 é 103
index.js:112 O elemento do index 10 é 110
index.js:113 O elemento do index 11 é 55
*/
