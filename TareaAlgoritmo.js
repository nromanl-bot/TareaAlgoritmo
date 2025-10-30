
// Autor: (Nolber Román)

// BLOQUE 1: Ejercicios con Cadenas

// 1. Contar caracteres de una frase publicitaria
function bloque1_ej1() {
  let frase = prompt("Ingrese una frase publicitaria:");
  alert(`La frase tiene ${frase.length} caracteres.`);
}

// 2. Contar apariciones de una vocal en un título
function bloque1_ej2() {
  let titulo = prompt("Ingrese un título:");
  let vocal = prompt("Ingrese una vocal a buscar:");
  let contador = 0;

  for (let i = 0; i < titulo.length; i++) {
    if (titulo[i].toLowerCase() === vocal.toLowerCase()) {
      contador++;
    }
  }
  alert(`La vocal '${vocal}' aparece ${contador} veces.`);
}

// 3. Invertir un nombre de producto
function bloque1_ej3() {
  let producto = prompt("Ingrese un nombre de producto:");
  let invertido = producto.split("").reverse().join("");
  alert(`El nombre invertido es: ${invertido}`);
}

// 4. Comparar nombres de ciudades por longitud
function bloque1_ej4() {
  let ciudad1 = prompt("Ingrese la primera ciudad:");
  let ciudad2 = prompt("Ingrese la segunda ciudad:");

  if (ciudad1.length > ciudad2.length) {
    alert(`La palabra '${ciudad1}' tiene más letras.`);
  } else if (ciudad2.length > ciudad1.length) {
    alert(`La palabra '${ciudad2}' tiene más letras.`);
  } else {
    alert("Ambas ciudades tienen la misma cantidad de letras.");
  }
}

// 5. Obtener iniciales de un cargo profesional
function bloque1_ej5() {
  let cargo = prompt("Ingrese un cargo profesional:");
  let palabras = cargo.split(" ");
  let iniciales = "";
  for (let palabra of palabras) {
    iniciales += palabra[0].toUpperCase() + ".";
  }
  alert(`Las iniciales son: ${iniciales}`);
}


// BLOQUE 2: Versión con Arreglos del Bloque 1

// 1. Contar caracteres de varias frases publicitarias
function bloque2_ej1() {
  let frases = ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"];
  let resultado = "";
  for (let frase of frases) {
    resultado += `"${frase}" → ${frase.length} caracteres\n`;
  }
  alert(resultado);
}

// 2. Contar apariciones de una vocal en cada título
function bloque2_ej2() {
  let titulos = ["Programación avanzada", "Desarrollo web", "Análisis de datos"];
  let vocal = prompt("Ingrese una vocal:");
  let resultado = "";

  for (let titulo of titulos) {
    let contador = 0;
    for (let letra of titulo.toLowerCase()) {
      if (letra === vocal.toLowerCase()) contador++;
    }
    resultado += `"${titulo}" → ${contador} veces la '${vocal}'\n`;
  }
  alert(resultado);
}

// 3. Invertir los nombres de varios productos
function bloque2_ej3() {
  let productos = ["Laptop", "Celular", "Tablet"];
  let resultado = "";
  for (let p of productos) {
    let invertido = p.split("").reverse().join("");
    resultado += `"${p}" → "${invertido}"\n`;
  }
  alert(resultado);
}

// 4. Comparar longitudes de nombres de ciudades
function bloque2_ej4() {
  let ciudades = ["Milagro", "Guayaquil", "Quito", "Cuenca"];
  let mayor = ciudades[0];
  for (let ciudad of ciudades) {
    if (ciudad.length > mayor.length) {
      mayor = ciudad;
    }
  }
  alert(`La ciudad con más letras es '${mayor}' (${mayor.length} letras).`);
}

// 5. Obtener iniciales de varios cargos profesionales
function bloque2_ej5() {
  let cargos = ["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"];
  let resultado = "";

  for (let cargo of cargos) {
    let palabras = cargo.split(" ");
    let iniciales = "";
    for (let palabra of palabras) {
      iniciales += palabra[0].toUpperCase() + ".";
    }
    resultado += `"${cargo}" → ${iniciales}\n`;
  }
  alert(resultado);
}


// BLOQUE 3: Ejercicios Individuales con Ciclos


// 1. Promedio de calificaciones mayores a 70
function bloque3_ej1() {
  let n = parseInt(prompt("Ingrese número de calificaciones:"));
  let suma = 0, contador = 0;

  for (let i = 0; i < n; i++) {
    let nota = parseFloat(prompt(`Ingrese nota ${i + 1}:`));
    if (nota >= 70) {
      suma += nota;
      contador++;
    }
  }
  if (contador > 0) {
    alert(`Promedio de notas ≥ 70: ${(suma / contador).toFixed(2)}`);
  } else {
    alert("No hay notas mayores o iguales a 70.");
  }
}

// 2. Contar cuántos números negativos se ingresan
function bloque3_ej2() {
  let n = parseInt(prompt("Ingrese cuántos números desea ingresar:"));
  let negativos = 0;

  for (let i = 0; i < n; i++) {
    let valor = parseFloat(prompt(`Ingrese valor ${i + 1}:`));
    if (valor < 0) negativos++;
  }
  alert(`Cantidad de negativos: ${negativos}`);
}

// 3. Promedio de edades: mayores vs menores de edad
function bloque3_ej3() {
  let n = parseInt(prompt("Ingrese número de personas:"));
  let sumaMay = 0, sumaMen = 0, cMay = 0, cMen = 0;

  for (let i = 0; i < n; i++) {
    let edad = parseInt(prompt(`Ingrese edad ${i + 1}:`));
    if (edad >= 18) {
      sumaMay += edad;
      cMay++;
    } else {
      sumaMen += edad;
      cMen++;
    }
  }

  let promMay = cMay ? (sumaMay / cMay).toFixed(2) : 0;
  let promMen = cMen ? (sumaMen / cMen).toFixed(2) : 0;

  alert(`Promedio de mayores: ${promMay}\nPromedio de menores: ${promMen}`);
}

// 4. Mostrar la tabla de multiplicar de un número
function bloque3_ej4() {
  let num = parseInt(prompt("Ingrese un número:"));
  let resultado = `Tabla del ${num}:\n`;

  for (let i = 1; i <= 10; i++) {
    resultado += `${num} × ${i} = ${num * i}\n`;
  }
  alert(resultado);
}

// 5. Promedio de números pares e impares
function bloque3_ej5() {
  let n = parseInt(prompt("Ingrese cantidad de números:"));
  let sumaP = 0, sumaI = 0, cP = 0, cI = 0;

  for (let i = 0; i < n; i++) {
    let valor = parseInt(prompt(`Ingrese valor ${i + 1}:`));
    if (valor % 2 === 0) {
      sumaP += valor;
      cP++;
    } else {
      sumaI += valor;
      cI++;
    }
  }

  let promP = cP ? (sumaP / cP).toFixed(2) : 0;
  let promI = cI ? (sumaI / cI).toFixed(2) : 0;

  alert(`Promedio de pares: ${promP}\nPromedio de impares: ${promI}`);
}


// BLOQUE 4: Versión con Arreglos del Bloque 3


// 1. Promedio de calificaciones mayores a 70
function bloque4_ej1() {
  let calificaciones = [65, 80, 90, 50, 75];
  let suma = 0, contador = 0;

  for (let nota of calificaciones) {
    if (nota >= 70) {
      suma += nota;
      contador++;
    }
  }
  alert(`Promedio de calificaciones ≥ 70: ${(suma / contador).toFixed(2)}`);
}

// 2. Contar números negativos en una lista
function bloque4_ej2() {
  let numeros = [3, -5, 0, 7, -1, -8];
  let negativos = 0;
  for (let n of numeros) {
    if (n < 0) negativos++;
  }
  alert(`Cantidad de números negativos: ${negativos}`);
}

// 3. Promedio de edades: mayores vs menores
function bloque4_ej3() {
  let edades = [17, 20, 35, 15, 18];
  let sumaMay = 0, sumaMen = 0, cMay = 0, cMen = 0;

  for (let edad of edades) {
    if (edad >= 18) {
      sumaMay += edad;
      cMay++;
    } else {
      sumaMen += edad;
      cMen++;
    }
  }
  let promMay = (sumaMay / cMay).toFixed(2);
  let promMen = (sumaMen / cMen).toFixed(2);
  alert(`Promedio de mayores: ${promMay}\nPromedio de menores: ${promMen}`);
}

// 4. Mostrar tablas de multiplicar de varios números
function bloque4_ej4() {
  let numeros = [3, 5];
  let resultado = "";
  for (let n of numeros) {
    resultado += `Tabla del ${n}:\n`;
    for (let i = 1; i <= 10; i++) {
      resultado += `${n * i}, `;
    }
    resultado += "\n\n";
  }
  alert(resultado);
}

// 5. Promedio de números pares e impares
function bloque4_ej5() {
  let numeros = [2, 5, 8, 9, 4, 7];
  let sumaP = 0, sumaI = 0, cP = 0, cI = 0;

  for (let n of numeros) {
    if (n % 2 === 0) {
      sumaP += n;
      cP++;
    } else {
      sumaI += n;
      cI++;
    }
  }
  let promP = (sumaP / cP).toFixed(2);
  let promI = (sumaI / cI).toFixed(2);
  alert(`Promedio de pares: ${promP}\nPromedio de impares: ${promI}`);
}
