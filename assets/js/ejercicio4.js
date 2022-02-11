//EJERCICIO 4

//Se le pide al usuario que ingrese el número de días que quiere transformar y se guarda en una variable.
let numDias = parseInt(prompt("Ingrese el número de días a transformar:"))

//Con el número ingrsado, se realizan los calculos correspondientes y se guardan en variables.
let numResto = numDias % 7
let semana = Math.floor(numDias / 7)
let anio = Math.floor(numDias / 365)
let anioResto = numDias % 365
let semResto = Math.floor(anioResto / 7)
let numResto2 = anioResto % 7

//Se ingresa esta condición para mostrar en DOM, solo los días menores a 7.
document.write("EJERCICIO 4" + "<br> <br>")
document.write("El número ingresado es:" + " " + numDias + " " + "días" + ", equivalente a:" + " " + "<br> <br>")
if (numDias < 7) {
    document.write("Día(s):" + " " + numDias + ".")
    //Esta condición para mostrar en DOM, (si el número ingresado es mayor o igual a 7), la cantidad de semanas y días.
} else if (numDias >= 7 && numDias < 365) {
    document.write("Semana(s):" + " " + semana + "." + "<br> <br>")
    document.write("Día(s):" + " " + numResto + ".")
}
//Esta condición muestra en DOM, (si el numero ingresado es mayor o igual a 365), la equivalencia en años, semanas y días. 
if (numDias >= 365) {
    document.write("Año(s):" + " " + anio + "." + "<br> <br>")
    document.write("Semana(s):" + " " + semResto + "." + "<br> <br>")
    document.write("Día(s):" + " " + numResto2 + ".")
}