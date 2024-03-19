///Repaso de Programacion I

///Variables
let miVariable = "Juan";
let edad = 35;
let meses = 420.2;
let ocupación = 'Político';
let oracion = miVariable + ' tiene ' + edad + ' años' + ', es decir ' + meses + ' meses ' + 'y es ' + ocupación;

///Arrays
let provinciasConC = ['Córdoba', 'Corrientes', 'Chubut', 'Chaco'];
let divisoresDediez = [1, 2, 5, 10];
provinciasConC[0];
divisoresDediez.length;
let frutas = ['Banana', 'Manzana', 'Naranja'];
frutas.push("Uva");

///Funciones
function sumar (a,b){
    return a+b;
};
//Funcion declarada
function saludar (nombre){
    return 'Hola ' + nombre;
};
//Funcion expresada
let despedir = function(nombre){
    return 'Adios ' + nombre;
};
sumar(3145,1082);
saludar("Tommy");
let expresion = saludar();
console.log(expresion);
let resultado = sumar();
console.log(resultado);

///Objetos Literales
let auto = {
    patente: 'AC 215 OD',
    dueño: 'Pedro Lopez',
    multas: 0,
    condicion: function(){
        return "Hola, soy " + this.dueño + ' dueño del auto con patente '+ this.patente;
    }
};
console.log(auto.dueño);
console.log(auto.patente);
console.log(auto.multas);
auto.condicion();

//Alertas
let mensaje = "Bienvenido";
alert(mensaje);
let mensaje1 = "¿Cuál es su nombre?";
let nombreusuario = prompt(mensaje1);
let mensaje2 = "¿Es usted mayor de edad?";
let confirmausuario = confirm(mensaje2);
//Operadores
(10 > 15) && (10 != 20); //false
(20 > 8) && (5 == 5); //true
(15 > 12) || (18 != 18); //true
!(10 > 15); //not
//Condicionales
//if (condición a evaluar) {
    // código a ejecutar si la condición es verdadera.
//  } else if (otra condición a evaluar) {
    // código a ejecutar si la condición anterior es falsa.
//  } else {
    // código a ejecutar si todas las condiciones anteriores fueron falsas.
//  }


  



