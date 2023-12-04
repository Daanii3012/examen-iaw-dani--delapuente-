//Escribe un programa que reciba cadenas de texto de los usuarios, las sume en una variable, 
//la imprima por pantalla y compruebe cuántos de los caracteres introducidos eran dígitos del 0 al 9. Un ejemplo del output podría ser este:
const scanner = require ("prompt-sync")({ sigint: true })

let escribeTexto = scanner("Escribe una cadena de texto -->")
let suma = ""
while (escribeTexto != "cancelar") {
    escribeTexto = scanner("Escribe una cadena de tetxo -->")  
    suma += escribeTexto
}
console.log("La suma de las cadenas es --> " + suma)

