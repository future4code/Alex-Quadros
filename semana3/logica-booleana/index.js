/*EXERCICIO DE INTERPRETACAO DE CODIGO */

// Exercicio-1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// a.  false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
// b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// b. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
// b. false

console.log("e. ", typeof resultado)
// e.  boolean

// Exercicio-2
let array
console.log('I. ', array)
// I. undefined

array = null
console.log('II. ', array)
// II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
// III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
// IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
// V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
// VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
// VII. 1

// a. O que é `array` e como se declara em `JS`?
// R. Array são maneiras de guradar e acesar mais de uma informção ao mesmo tempo.

// b. Qual o index inicial de um `array`?
// R. Seu index incial comeca com 0(zero).

// c. Como se determinar o tamanho do `array`?
// R. O comando .lenght permite determinar o tamanho de array.

// d. Indique todas as mensagens impressas no console.

/*EXERCICIO DE ESCRITA DE CODIGO */

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
const fahren = 77-32
const multiplique = 5
const dividir = 9
const fahretoCelsius = 273.15

let ConversaoA = fahren * multiplique / dividir + fahretoCelsius
console.log(ConversaoA)
//R. no console = 298.15

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
const celsius = 80
const multipliqueCelsius = 9
const dividirCelsius = 5
const CelsiusToFahren = 32

let ConversaoB = celsius * multipliqueCelsius / dividirCelsius + CelsiusToFahren
console.log(ConversaoB)
//R. no console = 176

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
const celsiusK = 30
const Kelvin = 273.15

let ConversaoC = celsiusK + Kelvin
console.log(ConversaoC)
//R. no console = 303.15

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
const numeroD = prompt("Insira o numero que deseja converter de graus Celsius para Kelvin")
const KelvinD = 273.15

let ConversaoD = Number(numeroD) + Number(KelvinD)
console.log("O resultado é", ConversaoD ,"°K")
//R. 25° Celsius em Kelvins? 
//R. no console = O resultado é 298.15 °K


