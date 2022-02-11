//EJERCICIO 2

//Se crean dos variables, las que ingresara el usuario.
let numero1 = parseInt(prompt("Ingrese Primer Número distinto a cero:"))
let numero2 = parseInt(prompt("Ingrese Segundo Número distinto al anterior y distinto a cero:"))

//CONDICIONES: numero1 y numero2 deben ser distintos entre si y distinto de cero.

if (numero1 == numero2 || numero1 == 0 || numero2 == 0) {
    alert("numeros son iguales entre si o igual a 0")
    location.reload()
}

//SE REALIZAN LAS OPERACIONES
const suma = (numero1 + numero2)
const resta = (numero1 - numero2)
const multi = (numero1 * numero2)
const div = (numero1 / numero2)
const modulo = (numero1 % numero2)


//SE MUESTRA EN EL DOM
document.write("EJERCICIO 2" + "<br> <br>")
document.write("LOS NUMEROS INGRESADOS FUERON: ", numero1 + " " + "y" + " " + numero2 + "<br> <br>")
document.write("\"LA SUMA DE ESTOS ES\": ", suma + "<br>")
document.write("\"LA RESTA DE ESTOS ES\": ", resta + "<br>")
document.write("\"LA MULTIPLICACION DE ESTOS ES\": ", multi + "<br>")
document.write("\"LA DIVISION DE ESTOS ES\": ", div + "<br>")
document.write("\"EL MODULO DE ESTOS ES\": ", modulo + "<br>")