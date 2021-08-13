// Generador de excusas en Javascript concatenando una excusa aleatoria de 3 arreglos

var columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "en cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el codigo",
    "apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalacion",
    "Cuando averiguemos por que se cae el proceso"
];
var columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada", 
    "del gestor de peticiones",
    "de las clases de abstracción",
    "del recolector de basura"
];
var columnaC = [
    "del directorio LDAP",
    "de la maquina virtual java",
    "del proxy inverso",
    "del gestor del cluster",
    "del broker de ojetos distribuido",
    "de la capa de presentacion"
];

// Obtener un numero random de los 3 arreglos
var numColumnaA = Math.floor(Math.random() * columnaA.length);
console.log(numColumnaA);

var numColumnaB = Math.floor(Math.random() * columnaB.length);
console.log(numColumnaB);

var numColumnaC = Math.floor(Math.random() * columnaC.length);
console.log(numColumnaC);


// Se concatenan los resultados del random de los 3 arreglos
var excusa = columnaA[numColumnaA] + " " + columnaB[numColumnaB] + " " + columnaC[numColumnaC]
console.log(excusa);

// Alternativa sin necesidad de poner espacios.
console.log(columnaA[numColumnaA], columnaB[numColumnaB], columnaC[numColumnaC]);

// Para escribirlo en el HTML
document.write("<h1>Excusa generada</h1>", columnaA[numColumnaA], " ", columnaB[numColumnaB], " ", columnaC[numColumnaC]);