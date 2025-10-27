/*NOLBER ROMÁN*/

/*Contar caracteres de una palabra
o Entrada: "Manzana"
o Salida: "La palabra tiene 7 letras."
*/
function ContarPalabras() {
    let palabra= prompt("Inserte la palabra a contar:")
    if(palabra){
        let ncaracter=palabra.length;
        console.log (`La palabra ${palabra} tiene ${ncaracter} letras`)
    }else{
        console.log("No se ingreso ninguna palabra")
    }
}debugger;
ContarPalabras()

/*Contar apariciones de una letra específica
o Entrada: "Me encanta el café"
o Salida: "La letra 'e' aparece 4 veces."
*/ 
function AparicionesDeLetra() {
    let frase = prompt("inserte la frase:").toLowerCase();
    let letra = prompt("inserte letra:").toLowerCase();
    let contador = 0;
    for(let i = 0; i < frase.length; i++) {
        if(frase[i] === letra) {
            contador++;
        }
    }
alert(`La letra ${letra} aparece ${contador} veces`)
}debugger;
AparicionesDeLetra()

/*Invertir un texto
o Entrada: "Quito"
o Salida: "otiuq" */

function InvertirTexto() {
    let texto = prompt("Inserte la palabra:");
    let invertido = "";
    for(let i= texto.length - 1; i >= 0; i--){
        invertido += texto[i];
    }
    alert(`El texto invertido es: "${invertido}"`);
}debugger;
InvertirTexto()

/*Comparar longitudes de cadenas
o Entrada: "García" y "Pérez"
o Salida: "El apellido 'García' tiene más letras."*/
function longitudDeCadenas(){
    let palabra1 = prompt("Inserte primera palabra");
    let palabra2 = prompt("Inserte segunda palabra");
    if(palabra1.length < palabra2.length){
        console.log(`la palabra "${palabra2}" tiene mas letras`);
    }else{
        console.log(`La palabra "${palabra1}" tiene mas letras`);
    }
}debugger;
longitudDeCadenas()

/*Iniciales de un nombre completo
o Entrada: "Ana María Torres"
o Salida: "A.M.T."*/
function Iniciales(){
    let nombre = prompt("Ingrese su nombre completo");
    let iniciales = nombre[0]
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] == " "){
            iniciales = iniciales+nombre[i+1];
        }
    }
     alert(" Iniciales:"+iniciales);
}debugger;
Iniciales() 

/*Reemplazo de caracteres
o Entrada: "Programador"
o Salida: "Pr#gramad#r"*/
function Reemplazodecaracteres(){
    let textoa = prompt("ingrese el texto:");
    let letrac = prompt("Ingrese letra a cambiar:");
    let nuevoc = prompt("Ingrese nuevo caracter:");
    let nuevotexto = " ";
    for(i=0; i<textoa.length; i++){
        if(textoa[i] == letrac){
            nuevotexto = nuevotexto + nuevoc;
        }else{
            nuevotexto = nuevotexto + textoa[i];
        }
    }
    alert(`Texto "${textoa}", Nuevo texto: "${nuevotexto}"`)
}debugger;
Reemplazodecaracteres()

/*Palabra palíndroma
o Entrada: "radar"
o Salida: "La palabra 'radar' es un palíndromo."
*/
function PalabraPalindroma(){
    let palabraa = prompt("Ingrese palabra que desee saber si es palíndromo");
    let textob = palabraa.toLowerCase();
    let invertida = "";
    for(let i = textob.length - 1; i >= 0; i--){
        invertida += textob[i];
    }
    if(texto === invertida) {
        alert(`la palabra "${palabraa}" es un palídromo.`)
    }else{
        alert(`la palabra "${palabraa}" no es un palídromo.`)
    }
}debugger;
PalabraPalindroma()

/*Frase con mayor cantidad de caracteres
o Entrada: "Me gusta el fútbol" y "Prefiero el baloncesto"
o Salida: "La frase 'Prefiero el baloncesto' tiene más caracteres."*/
function mayorCantidadCaracteres(){
    let frase1 = prompt("Ingrese la primera frase:");
    let frase2 = prompt("Ingrese la segunda frase:");
    if(frase1.length > frase2.length){
        alert(`La frase "${frase1}" tiene mas caracteres`);
    }else if(frase1.length < frase2.length){
        alert(`La frase "${frase2}" tiene mas caracteres.`);
    }else{
        alert("Ambas frases tienen la misma contidad de caracteres.");
    }
}debugger;
mayorCantidadCaracteres()

/*Contar apariciones de un carácter elegido
o Entrada: Texto: "Examen de programación", Carácter: "m"
o Salida: "La letra 'm' aparece 3 veces."*/
function aparicionCaracterelegido(){
    let textose = prompt("Ingrese texto:");
    let caractere = prompt("Ingrese caracter a elegir:");
    let contadore = 0;
    for(let i = 0; i < textose.length; i++){
        if(textose[i] === caractere){
            contadore++;
        }
    }
    alert(`La letra "${caractere}" aparece ${contadore} veces.`)
}debugger;
aparicionCaracterelegido()

/*Dividir oración en palabras
• Entrada: "Me gusta aprender programación"
• Salida:
• Me
• gusta
• aprender
• programación*/
function DividirenPlabras(){
    let oración = prompt("Ingrese oracion a dividir:");
    let palabras = oración.split(" ");
    let resultado = "";
    for(let i = 0; i < palabras.length; i++){
        resultado += palabras[i] + "/n";
    }
    alert(resultado);
}debugger;
DividirenPlabras()

/*Divisores de números en un arreglo
• Entrada: [6, 10]
• Salida:
o Divisores de 6: 1, 2, 3, 6
o Divisores de 10: 1, 2, 5, 10*/
function divisoresNumeros(){
    let numeros = [6, 10];
    for(let i = 0; i < numeros.length; i++){
        let numact = numeros[i];
        let divisor = "";
        for(let c = 1; c <= numact; c++){
            let r=numact % c;
            if(r === 0){
                if(divisor.length > 0){
                    divisor += ", ";
                }
                divisor += c;
            }
        }
        console.log(`Divisores de "${numact}" = ${divisor}.`);
    }
}debugger;
divisoresNumeros()

/*. Suma de divisores en un arreglo
• Entrada: [6, 12]
• Salida:
o Suma divisores de 6 = 12
o Suma divisores de 12 = 28*/
function sumaDeDivisores(){
    let cantidad = parseInt(prompt("¿Cuantos números vas a ingresar?"));
    let numeros = [];
    for(let i = 0; i < cantidad; i++){
        let num= parseInt(prompt("ingrese un número."));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let suma = 0;
        for(let j = 1; j <= num; j++){
            if(num % j === 0){
                suma += j;
            }
        }
        alert(`Suma divisores de ${num} = ${suma}`);
    }
}debugger;
sumaDeDivisores()

/*. Números perfectos en un arreglo
• Entrada: [6, 10, 28]
• Salida: "Números perfectos: 6, 28"*/
function NumPerfectos(){
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
    let numeros = [];
    let perfectos = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un numero:"));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let suma = 0;
    for(let j = 1; j < num; j++){
        if(num % j === 0){
            suma += j;
        }
    }
    if(suma === num){
        perfectos.push(num);
    }
    }
    if(perfectos.length > 0){
        alert("Numeros perfectos:" + perfectos.join(", "));
    }else{
        alert("No hay numeros perfectos en el arreglo.");
    }
}debugger;
NumPerfectos()

/*Números primos en un arreglo
• Entrada: [7, 8, 13]
• Salida: "Números primos: 7, 13"*/
function NumerosPrimos(){
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
    let numeros = [];
    let primos = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un numero:"));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let esPrimo = true;
    if(num <= 1){
            esPrimo = false;
    }else{
    for(let j = 1; j < num; j++){
        if(num % j === 0){
            esPrimo = false;
            break;
        }
      }
    }
    if(suma === num){
        primos.push(num);
    }
    }
    if(primos.length > 0){
        alert("Numeros primos:" + perfectos.join(", "));
    }else{
        alert("No hay numeros primos en el arreglo.");
    } 
}debugger;
NumerosPrimos()

/*Factorial de números en un arreglo
• Entrada: [3, 5]
• Salida:
o 3! = 6
o 5! = 120*/
function factorialArreglo(){
    let cantidad = parseInt(prompt("¿Cuantos números vas a ingresar?"));
    let numeros = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un numero:"));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let factorial = 1;
        for(let j = 1; j <= num; j++){
            factorial *= j;
        }
        alert(num + "! = " + factorial)
    }
}debugger;
factorialArreglo()

/*Invertir números en un arreglo
• Entrada: [123, 450]
• Salida: [321, 54]*/
function invertirArreglo(){
    let cantidad = parseInt(prompt("¿Cuantos números vas a ingresar?"));
    let numeros = []; 
    let invertidos = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un número:"));
        numeros[i] = num; 
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let invertido = 0;
        while(num > 0){
            let digito = num % 10;
            invertido = invertido * 10 + digito;
            num = Math.floor(num / 10);
        }
        invertido.push(invertido);
    }
    alert("Números invertidos: [" + invertidos.join(", ")+"]");
}debugger;
invertirArreglo()

/*Promedio de un arreglo
• Entrada: [5, 7, 9, 3, 6]
• Salida: "El promedio es 6."*/
function promedioArreglo() {
  let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
  let numeros = [];
  let suma = 0;
  for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt("Ingresa un número:"));
    numeros[i] = num;
    suma += num; // acumula la suma
  }
  let promedio = suma / cantidad;

  alert("El promedio es " + promedio + ".");
}debugger;
promedioArreglo();

/*Contar impares en un arreglo
• Entrada: [2, 5, 7, 8, 10]
• Salida: "Cantidad de impares: 2"*/
function contarImpares(){
    let cantidad = parseInt(prompt("Ingrese un número:"));
    let numeros = [];
    let contadorImpares = 0;
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un número:"));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
       if(numeros[i] % 2 !== 0){
        contadorImpares++;
       } 
    }
    alert("Cantidad de impares:" + contadorImpares);
}debugger;
contarImpares()

/*Mayores de edad en un arreglo
• Entrada: [15, 22, 18, 30, 12]
• Salida: "Mayores de edad: 3"*/
function mayorEdadArreglo(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de edades:"));
    let edades = [];
    let mayoresEdad = 0;
    for(let i = 0; i < cantidad; i++){
        let edad = parseInt(prompt("Ingrese una edad:"));
        edades[i] = edad;
    }
    for(let i = 0; i < edades.length; i++){
       if(edades[i] > 18){
        mayoresEdad++; 
       }
    }
    alert("Mayores de edad:" + mayoresEdad);
}debugger;
mayorEdadArreglo()

/*Buscar valor en un arreglo
• Entrada: [4, 8, 15, 23], valor = 15
• Salida: "El valor 15 sí existe en el arreglo."*/
function buscarValor(){
    let cantidad = parseInt(prompt("¿Cuantos valores va a ingresar:"));
    let numeros = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un numero"));
        numeros[i] = num;
    }
    let valorbuscado = parseInt(prompt("Ingrese el valor a buscar:"));
    let encontrado = false;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] === valorbuscado){
            encontrado = true;
            break;
        }
    }
    if(encontrado){
        alert(`El valor ${valorbuscado} si existe en el arreglo.`);
    }else{
        alert(`El valor ${valorbuscado} no existe en el arreglo.`);
    }
}debugger;
buscarValor()

/*. Concatenar palabras de un arreglo
• Entrada: ["Me", "gusta", "programar"]
• Salida: "Me gusta programar"*/
function concatenarpalabras(){
    let cantidad = parseInt(prompt("¿Cuantas palabras desea ingresar?"));
    let palabras = [];
    let frase = "";
    for(let i = 0; i < cantidad; i++){
        let palabra = prompt("Ingresa una palabra");
        palabras[i] = palabra;
    }
    for(let i = 0; i < palabras.length; i++){
        frase += palabras[i];
        if(i < palabras.length - 1){
            frase += " ";
        } 
    }
    alert("Frase resultante: " + frase);
}debugger;
concatenarpalabras()

/*Cubo de elementos de un arreglo
• Entrada: [2, 3, 4]
• Salida: [8, 27, 64]*/
function cuboElementos(){
    let cantidad = parseInt(prompt("¿Cuantos valores desea ingresar"));
    let numers = [];
    let cubonumber = [];
    for(let i = 0; i < cantidad; i++){
        let numer = parseInt(prompt("Ingrese un numero:"));
        numers[i] = numer;
    } 
    for(let i = 0; i < numers.length; i++){
        let cubo = numers[i] * numers[i] * numers[i];
        cubonumber.push(cubo);
    }
    alert("Cubo de los números: [" + cubonumber.join(", "));
}debugger;
cuboElementos()

/*Tabla de multiplicar de elementos
• Entrada: [3, 5]
• Salida:
o Tabla de 3: 3, 6, 9, …, 30
o Tabla de 5: 5, 10, 15, …, 50*/
function TablaMultiplicar(){
    let cantidad = parseInt(prompt("¿Cuantos números vas a ingresar?"));
    let numeros = [];
    for(let i = 0; i < cantidad; i++){
        let num = parseInt(prompt("Ingrese un número:"));
        numeros[i] = num;
    }
    for(let i = 0; i < numeros.length; i++){
        let num = numeros[i];
        let tabla = "";
        for(let j = 1; j <= 10; j++){
            tabla += (num * j);
            if (j < 10) tabla += ", ";
        }
        alert(`Tabla de ${num}: ${tabla}`);
    }
}debugger
TablaMultiplicar()

/*Factorial de cada número en un arreglo
• Entrada: [4, 6]
• Salida: [24, 720]*/
function factorialesArreglo() {
  let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
  let numeros = [];
  let resultados = [];
  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt("Ingresa un número:"));
    numeros[i] = num;
  }
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let factorial = 1;
    for (let j = 1; j <= num; j++) {
      factorial *= j;
    }
    resultados.push(factorial);
  }
  alert("Factoriales: [" + resultados.join(", ") + "]");
}debugger;
factorialesArreglo()

/*Copiar pares a otro arreglo
• Entrada: [3, 8, 11, 14, 25]
• Salida: [8, 14]*/
function copiarPares() {
  let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
  let numeros = [];
  let pares = [];
  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt("Ingresa un número:"));
    numeros[i] = num;
  }
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  alert("Arreglo original: [" + numeros.join(", ") + "]\n" +
        "Arreglo de pares: [" + pares.join(", ") + "]");
}debugger
copiarPares()

/*Suma de dos arreglos en un tercero
• Entrada: A = [2, 4, 6], B = [1, 3, 5]
• Salida: C = [3, 7, 11]*/
function sumarArreglos() {
  let cantidad = parseInt(prompt("¿Cuántos elementos tendrá cada arreglo?"));
  let A = [];
  let B = [];
  let C = [];
  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt("Ingresa el elemento " + (i + 1) + " del arreglo A:"));
    A[i] = num;
  }
  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt("Ingresa el elemento " + (i + 1) + " del arreglo B:"));
    B[i] = num;
  }
  for (let i = 0; i < cantidad; i++) {
    C[i] = A[i] + B[i];
  }
  alert("A = [" + A.join(", ") + "]\n" +
        "B = [" + B.join(", ") + "]\n" +
        "C = [" + C.join(", ") + "]");
}debugger;
sumarArreglos()





