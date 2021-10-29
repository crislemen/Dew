
function grupo1a() {
    var array1 = ['Prosper Chigumba', 'Jorum Muchambo', 'Valentine Musarurwa', 'Cabby Kamhapa', 'John Takudzwa','Carlton Munzabwa', 'Justice Jangano', 'Hardlife Zvirekwi']
    array1.sort();
    console.log(array1);    
}
    class persona{
        nombre;
        apellido;
        edad;
        dni;
        constructor(nombre,apellido,edad,dni){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.dni = dni;
        }
        toString(){
        return 'Me llamo '+this.nombre+' '+this.apellido+ ' y tengo '+this.edad+' Años.Mi dni es:'+this.dni; 
        }
    }
    class usuario{
        nombre;
        #contrasenia;
        constructor(nombre,contrasenia){
            this.nombre = nombre;
            this.#contrasenia = contrasenia;
        }
    }
function grupo2() {
let nombre = "pepe";
let apellido = "Juan";
let edad = 15;
let dni = '12345678A';
let persona1 = new persona(nombre,apellido,edad,dni);
alert(persona1.toString());
}
function grupo3() {
    
}