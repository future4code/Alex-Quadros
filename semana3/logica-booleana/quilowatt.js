/*CALCULO DE QUILOWATT*/

const quilowaat = 0.05
const consumo = 280

let valorTotal = Number(quilowaat) * Number(consumo)
console.log("O valor total do consumo é", valorTotal ,"reais por hora")
console.log("com desconto de 15%")
let valorComDesconto = Number(quilowaat) * Number(consumo) * 15 /100
console.log("com desconto de 15% será", valorComDesconto, "reais por hora para pagamento até o dia 10 do mês")

//O valor total do consumo é 14 reais por hora
// com desconto de 15%
// com desconto de 15% será 2.1 para pagamento até o dia 10 do mês