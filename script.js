/*function contrasenaValida(contrasena) {
  if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9"){
    return true
  } else{
    return false
  }
}


  console.log(contrasenaValida("2Fj(jjbFsuj")) // true
  console.log(contrasenaValida("eoZiugBf&g9")) // true
  console.log(contrasenaValida("hola")) // false
  console.log(contrasenaValida("")) // false

function calcularImpuestos(edad, ingresos){
  if(edad >= 18 && ingresos >= 1000){
    return ingresos* 0.40
  } else{
    return 0
  }
}

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0


function bmi (peso, altura){
  operacion = peso / Math.pow(altura,2)
  operacionRedondeada = operacion.toFixed(2)
  if (operacion < 18.5){
    console.log("Bajo de peso, BMI = " + operacionRedondeada)
  }
  if(operacion >= 18.5 && operacion < 25){
    console.log("Normal, BMI = " + operacionRedondeada)
  }
  if(operacion >= 25 && operacion < 30){
    console.log("Sobrepeso, BMI = " + operacionRedondeada)
  }
  if(operacion >= 30){
    console.log("Obeso, BMI = " + operacionRedondeada)
  }
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"


function imprimirArreglo(... lista){
  lista.forEach(elemento => {
    console.log(elemento)
    
  });
}

valores = [1, "Hola", 2, "Mundo"]
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))


function likes (numero){
  if (numero < 1_000){
    return numero.toString()
  }if (numero >= 1_000 && numero <= 1_000_000){
    return (numero/1_000).toFixed(0) + "K"
  } else {
    return (numero/1_000_000).toFixed(0) + "M"
  }
}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

function fizzBuzz (numero){
  if (numero%15 === 0) return "fizzbuzz"
  if (numero%3 === 0) return "fizz"
  if (numero%5 === 0) return "buzz"
  return numero
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8


function contarRango(num1, num2){
  let contador = 0;
  for (let i = num1+1; i<num2; i++){
    contador++
  }
  return contador
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0


function sumarRango (numIni, numFin){
  sumador = 0
  for(let i=numIni; i<=numFin; i++){
    sumador += i
  }
  return sumador
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

function numeroDeAes(palabra) {
  palabra = palabra.toLowerCase()
  console.log(palabra)
  contadorDeA = 0
  for (let i = 0; i <= palabra.length; i++) {
    if (palabra[i] === "a") {
      contadorDeA++
    }
  }
  return contadorDeA

}
console.log(numeroDeAes("abracdabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0


function numeroDeCaracteres(str, char){
  let contador = 0
  for (let i = 0 ; i<= str.length ; i++){
    if (str[i] === char) {
      contador++
    }
  }
  return contador
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4


function sumarArreglo(arr){
  sumador = 0
  for (let i = 0 ; i < arr.length ; i++){
    sumador += arr[i]
  }
  return sumador
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0



function multiplicarArreglo (arr){
    return arr.reduce((a,b) => a*b, 1)
    
}
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1


function removerCeros(arr){
  const arrNuevo = []
  arr.forEach(element => {
    if(element !== 0){
      arrNuevo.push(element)
    }
  });
  return arrNuevo
}
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []


function sumarArreglo (arr, init, final){
  sumador = 0
  for (let i = init; i <= final ; i++){
    sumador += arr[i]
  }
  return sumador
}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0


function transcribir (str){
  let sumador = ""
  for (let i = 0; i < str.length ; i++){
    switch (str[i]){
      case "G":
        sumador += "C"
        break
      case "C":
        sumador += "G"
        break
      case "T":
        sumador += "A"
        break
      case "A":
        sumador += "U"
        break
      default:
        sumador += "?"
        console.error("El valor: " + str[i] + " es inválido");
    }
    
  }
  return  sumador
}

console.log(transcribir("A8CGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"


function capitalizar(str){
  if(!str)  return ""
  return str[0].toUpperCase() + str.slice(1)
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar(" ")) // ""


function capitalizar (str){
  let resultado = "";

  for (let i = 0 ; i < str.length ; i++){
    if ( i === 0 || str [i-1]=== " "){
      resultado += str[i].toUpperCase()
    } else {
      resultado += str[i]
    }
  } return resultado
}
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""


function max(arr) {
  let valor = 0
  if (arr === 0) {
    return undefined
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > valor) {
        valor = arr[i]
      }
    } return valor
  }
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


function numAsteriscos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "*") {
        contador++

      }
    }
  }
  return contador

}
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5


const fruits = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

console.log(fruits.at(-2))

const copy = fruits.with(1,"lol")
console.log({copy})


const numbers = [1, 2, 3, 4, 5, 6]

const grouped = Object.groupBy(
  numbers,
  number => {
    if (number % 2 === 0) return 'par'
    return 'impar' 
  }
)
  console.log(grouped)


  const wizards = ['Harry', 'Hermione', 'Ron', 'Snape', 'Dumbledore']
  
  const groupLastLetter = Object.groupBy(
    wizards, 
    wizard => wizard[wizard.length -1])
  console.log(groupLastLetter)



  let a = 5
  let b = 2

  c = ++a * b--
  console.log(c)
  console.log(a,b)
  const arr = []
  arr.push(a,b)
  console.log(arr)
  arr.pop()
  console.log(arr)


let a = 20;
let b = 30;
(a>b)?console.log(true):console.log(false)


matrix = [
  [10,20,30],
  [40,50,60]];

  for(let i = 0 ; i<matrix.length;i++){
    for(let j = 0; j<matrix[i].length; j++)
      console.log(matrix[i][j])
  }

  console.log(matrix[0].length)



function recursivo(numero){
  if(numero === 1){
    console.log(numero)
  }else{
    console.log(numero)
    recursivo(numero-1)
  }
}

recursivo(5)


let cadena = "Hola mundo"
let cadena2 = cadena.substring(0,4)
console.log(cadena2)

let cadena3 = cadena.substring(5)
console.log(cadena3)

let cadenaConcat = cadena2 + " " + cadena3
console.log(cadenaConcat)


let a = "30"
let b = "180"

let c = a + b
console.log(c)
let d = parseInt(a) + parseInt (b)
console.log(d)


let a = 30
let b = a.toString() + 50
console.log(b)


let a = -30
console.log(Math.abs(a))

*/

let persona = {
  nombre: "Ernesto",
  apellido: "González",
  email: "ing.ernestogonzalezr@gmail.com",
  edad: 27,
  idioma: "es",
  get lang(){
    return this.idioma.toUpperCase();
  },
  set lang (lang){
    this.idioma = lang.toUpperCase()
  },
  get nombreCompleto (){
    return this.nombre + " " + this.apellido
  }
}
/*
console.log(persona.nombreCompleto())

for(propiedad in persona){
  console.log(propiedad + ": " + persona[propiedad])
}

persona.tel = 351215353
console.log(persona)

let personaArray = Object.values(persona)
console.log(personaArray)

let personaString = JSON.stringify(persona)
console.log(personaString)
*/

console.log(persona.nombreCompleto)
console.log(persona.lang)
persona.lang = "en"
console.log(persona.lang)
console.log(persona.idioma)
