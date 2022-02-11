//EJERCICIO 3

//Se le pide al usuario que ingrese la temperatura celsius a transformar y se guarda en una variable.
let celsius = parseInt(prompt("Ingrese temperatura en grados Celsius:"))

//Conversión de grados celsius a temperatura Kelvin y a grados Fahrenheit. Se guardan en variables.
let kelvin = celsius + 273.15
let fahrenheit = ((celsius * 9 / 5) + 32)


//Se muetra en DOM los resultados.
document.write("EJERCICIO 3" + "<br> <br>")
document.write("LA TEMPERATURA EN GRADOS CELSIUS INGRESADA ES: ", celsius + "°C" + "<br> <br>")
document.write("\"LA CONVERSION A TEMPERATURA KELVIN ES\": ", " " + kelvin + "K" + "<br>")
document.write("\"LA CONVERSION A GRADOS FAHRANHEIT ES\": ", " " + fahrenheit + "°F" + "<br>")