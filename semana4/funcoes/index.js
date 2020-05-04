/* Exercícios de interpretação de código */

/* EXERCÍCIO 1 */
/* Leia o código abaixo: */


/* const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
      }      
	}
	return array
}

console.log(minhaFuncao(8)) */


//a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
//R. array vazio. []
//b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
//R. array com 6 elementos (6) [0, 1, 0, 1, 2, 3]
//c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
//R. array com 12 elementos (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

/* EXERCÍCIO 2 */
/* Leia o código abaixo: */

/* let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula")); */

/* a. Explicite quais são as saídas impressas no console */
/* R. Esta impressa no console:
0 porque Darvas está index [0],
2 porque João estano index [2]
e undefined porque não existe Paula no arrayDeNomes.*/

/* b. O código funcionaria se a lista fosse um array de números
(ao invés de um array de string)  e o nome fosse um número, ao se chamar a função?
Justifique sua resposta. */
// Acredito não funcionar pois estariomos colocanco numeros em strings

/* EXERCICIO 3*/
/* O código abaixo mostra uma função que recebe um array e devolve outro array.
Explique rapidamente o que ela faz e sugira um nome melhor para ela! */

/* function metodo(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
} */
// Não consegui resolver
