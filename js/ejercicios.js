/**********************  EJERCICIO 2 ************************************************************** */

function distancia(str1, str2) {
    var diferencia = 0;

    var length = Math.max(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }

    return diferencia;
}

console.log(distancia("hola", "hola"));  
console.log(distancia("sol", "tol"));   
console.log(distancia("carro", "correr")); 
console.log(distancia("abc", "abcd")); 
console.log(distancia("abc", "ab"));      

document.write(distancia("hola", "hola") + "<br>");
document.write(distancia("sol", "tol") + "<br>");
document.write(distancia("carro", "correr") + "<br>");
document.write(distancia("abc", "abcd") + "<br>");
document.write(distancia("abc", "ab") + "<br>" + "<hr>");


/***************************  EJERCICIO 3  **************************************** */

function comprimirString(str) {
    if (str === "") return "";

    var resultado = "";
    var contador = 1;

    for (var i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            contador++;
        } else {
            resultado += str[i - 1] + contador;
            contador = 1; 
        }
    }

    resultado += str[str.length - 1] + contador;

    return resultado;
}

console.log(comprimirString("aaabbbccca"));  
console.log(comprimirString("abc"));         
console.log(comprimirString("a"));        

document.write(comprimirString("aaabbbccca") + "<br>");
document.write(comprimirString("abc") + "<br>");
document.write(comprimirString("a") + "<br>" + "<hr>");

/********************************* EJERCICIO 4 *********************************************** */

Array.prototype.miReduce = function(callback, valorInicial) {
    if (this.length === 0 && valorInicial === undefined) {
        throw new TypeError('No se puede reducir un array vacío sin un valor inicial');
    }

    var acumulador = valorInicial !== undefined ? valorInicial : this[0];
    var inicio = valorInicial !== undefined ? 0 : 1;

    for (var i = inicio; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador;
};

const numeros = [1, 2, 3, 4];

const suma = numeros.miReduce((acumulador, valor) => acumulador + valor, 0);
console.log(suma);
document.write(suma + "<br>"); 

const producto = numeros.miReduce((acumulador, valor) => acumulador * valor, 1);
console.log(producto);
document.write(producto + "<br>"); 

const concatenacion = ["Hola", " ", "Mundo"].miReduce((acumulador, valor) => acumulador + valor);
console.log(concatenacion);
document.write(concatenacion); 



