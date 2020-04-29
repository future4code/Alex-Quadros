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

/* ECERCÍCIO 3 */
/* a. Escreva um programa que devolva o maior e o menor números contidos no array original */
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maxNumeroAtual = array[0]

for (let i = 0; i < array.length; i++) {
  if (array[i] > maxNumeroAtual) {
    maxNumeroAtual = array[i]
  }
}

console.log(maxNumeroAtual)
// Resposta no console "130"
