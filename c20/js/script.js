// Ejercicio 1: practicando clases
class Ciudadano {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }


    mostrar() {
      return `El ciudadano ${this.nombre} ${this.apellido}, tiene el siguiente número de DNI: ${this.dni}`
    }
}

const obj1 = new Ciudadano("Candelaria", "Sosa", "39922417");
const obj2 = new Ciudadano("Emiliano", "Sosa", "123445");
const obj3 = new Ciudadano("Pedrito", "Gomez", "34875838");
const obj4 = new Ciudadano("Juan", "Perez", "372728");

console.log(obj1.mostrar());
console.log(obj2.mostrar());
console.log(obj3.mostrar());
console.log(obj4.mostrar());

// Practicando Clases (de una forma parecida)

// class Ciudadano {
//   constructor(nombre, apellido, DNI) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.DNI = DNI;
//   }
//   mostrar() {
//     return `El ciudadano ${this.nombre} ${this.apellido} tiene como número de DNI: ${this.DNI}`
//   }
// }

// const persona1 = new Ciudadano("Homero", "Celano", 39922401);
// const persona2 = new Ciudadano("Lara", "Sosa", 39922402);
// const persona3 = new Ciudadano("Sil", "Torrilla", 39924401);
// const persona4 = new Ciudadano("Vicky", "Perujo", 39923401);

// console.log(`${persona1.mostrar()}, 
// ${persona2.mostrar()}, 
// ${persona3.mostrar()}, 
// ${persona4.mostrar()}.`);

// Ejercicio 2: practicando herencia

class AltaBajaCiudadano extends Ciudadano {
  constructor(nombre, apellido, dni, activo) {
    super(nombre, apellido, dni);
    this.activo = activo;
  }
  mostrarEstado() {
    return `${this.nombre} ${this.apellido} tiene DNI ${this.dni} y ${this.activo} se encuentra activo.`
  }
}

const usuario1 = new AltaBajaCiudadano("Homerito", "Celano", "39485739", "SÍ");
const usuario2 = new AltaBajaCiudadano("Cande", "Sosa", "39922402", "NO");

console.log(usuario1.mostrarEstado());
console.log(usuario2.mostrarEstado());