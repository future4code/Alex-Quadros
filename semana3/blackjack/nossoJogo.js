/*  */
console.log ("Bem vindo ao jogo Blackjack!")
if(confirm("Deseja começar un novo jogo")) {
   // o que fazer se o usuário clicar "ok"

const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto, carta.valor) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)
} else {
   // o que fazer se o usuário clicar "cancelar"
console.log("O jogo acabou")   
}

