/*NOLBER ROMÁN*/

//Contar caracteres de una frase publicitaria
//Entrada: "La tecnología avanza"
//Salida: "La frase tiene 19 caracteres."
function Frase () {
    let f = prompt("Ingresa una frase publicitaria:");
    let c = 0;

for (let i = 0; i < f.length; i++) {
  if (f[i] !== " ") { 
    c++; 
  }
}

console.log("La frase tiene " + c + " caracteres");
  }
Frase();


//Contar apariciones de una vocal en un título
//Entrada: "Programación avanzada"
//Salida: "La vocal 'a' aparece 5 veces."
function contarVocales() {
    let t = prompt("Ingrese un titulo:");
    let v = prompt("Ingrese una vocal a buscar:");
    let c = 0;
    for (let i = 0; i < t.length; i++) {
        if(t[i].toLowerCase() === v.toLowerCase()) {
            c++;
        }
    }
    console.log("La vocal " + v + " aparece " + c + " veces.");
}
contarVocales();
//Invertir un nombre de producto
//Entrada: "Laptop"
//Salida: "potpaL"
function invertirNombreProducto() {
    let p = prompt("Ingrese el nombre de un producto:");
    let inv = "";
    for (let i = p.length - 1; i >= 0; i--) {
        inv = inv + p[i];
    }   
    console.log("El nombre invertido es: " + inv);
}
invertirNombreProducto();
//Comparar nombres de ciudades por longitud
//Entrada: "Milagro" y "Guayaquil"
//Salida: "La palabra 'Guayaquil' tiene más letras."
function compararNombresCiudades() {
    let c1 = prompt("Ingrese el nombre de la primera ciudad:");
    let c2 = prompt("Ingrese el nombre de la segunda ciudad:");
    if (c1.length > c2.length) {
        console.log("La palabra " + c1 + " tiene más letras.");
    } else {
        console.log("La palabra " + c2 + " tiene más letras.");
    }
}
compararNombresCiudades();
//Obtener iniciales de un cargo profesional
//Entrada: "Director General Académico"
//Salida: "D.G.A."
function InicialesCargo() {
    let cargo = prompt("Ingrese el cargo profesional:");
    let iniciales = "";

for (let i = 0; i < cargo.length; i++) {
  if (i === 0 || cargo[i - 1] === " ") {
    iniciales = iniciales + cargo[i].toUpperCase() + ".";
  }
}
    console.log("Iniciales: " + iniciales);
}
InicialesCargo();


