//EJERCICIO 5

//Se le pide al usuario que ingrese 5 números y se guardan en variables.
let num1 = parseInt(prompt("Ingrese Primer Número:"))
let num2 = parseInt(prompt("Ingrese Segundo Número:"))
let num3 = parseInt(prompt("Ingrese Tercer Número:"))
let num4 = parseInt(prompt("Ingrese Cuarto Número:"))
let num5 = parseInt(prompt("Ingrese Quinto Número:"))

//Se realiza la suma de las variables y se guarda en una nueva.
let suma = num1 + num2 + num3 + num4 + num5

//Se realiza el promedio de las variables y se guarda en una nueva.
let promedio = (num1 + num2 + num3 + num4 + num5) / 5

//Se muestra en DOM los resultados.
document.write("EJERCICIO 5" + "<br> <br>")
document.write("Los números ingresados fueron:" + " " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + " " + "y" + " " + num5 + "<br> <br>")
document.write("La Suma de los cinco números es:" + " " + suma + "<br> <br>")
document.write("El promedio de los cinco números es:" + " " + promedio)