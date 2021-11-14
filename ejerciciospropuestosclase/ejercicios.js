//Grupo 1.- Recorrer arrays: Cristo y Delmiro
function ejercicio1() {
    var array1 = ['Prosper Chigumba', 'Jorum Muchambo', 'Valentine Musarurwa', 'Cabby Kamhapa', 'John Takudzwa','Carlton Munzabwa', 'Justice Jangano', 'Hardlife Zvirekwi']
    array1.sort();
    console.log(array1);    
}
//Grupo 2 y 4.- Recorrer Objetos: Víctor y Jorge  Getters y setters: Daniel y Gersan
class persona{
    constructor(nombre,apellido,direccion,contrasenia,edad,sexo){
        this.nombre= nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = edad;   
    }
    get nombre(){
        return this.nombre;
    }
    get apellido(){
        return this.apellido;
    }
    get direccion(){
        return this.direccion;
    }
    get contrasenia(){
        return this.contrasenia;
    }
    get edad(){
        return this.edad;
    }
    get sexo(){
        return this.sexo;
    }
    set nombre(x){
        if (x==String) {
            this.nombre= x;    
        }
    }
    set apellido(x){
        if (x != String) {
            this.apellido=x;
        }
    }
    set direccion(x){
        this.direccion = x;
    }
    set contrasenia(){
        this.contrasenia = x;
    }
    set edad(x){
        if (x <0) {
            this.nombre= x;    
        }
        
    }
    set sexo(Hombre,Mujer){
        if (x == 'Hombre' | x == 'Mujer') {
            this.sexo = x;    
        }
        
    }
}
    
function grupo2y4() {
    console.log(new persona("Pepe","Martinez","direccion",'contrasenia',15,'Hombre'));
}
//Grupo 3.- Propiedades privadas: Joel y Antonio
class usuario{
    nombre;
    #contrasenia;
    constructor(nombre,contrasenia){
        this.nombre = nombre;
        this.#contrasenia = contrasenia;
    }
}
function grupo3() {
    
}

// Grupo 5.- Documentar código: Nefta y Giovanni
/**
 * Array con las letras del dni
 * @param letras
 */
let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
        /**
         * conjunto de numeros del dni
         * @param numero
         */
        var numero = prompt("Pon tus numeros del dni");
        if (numero>0 && numero<99999999) {
        //Para sacar la letra correspondiente lo que hay que hacer es sacar el resto del numero del dni
        /**
         * Resultado del resto de la division del numero del dni por 23
         * @param letra
         */
        var letra = letras[numero %23];
        alert(letra); 
        }else{
            alert("Debes poner un dni valido")
        }
// Grupo 6.- “Use distinct”/imports:: Saul y Francisco
// Grupo 7.- getElementById: Jonay y Javier
/**
 * Pinta los nodos pares de la primera lista en rojo. 
 * Sin tocar el HTML. Fichero adjunto: `Ejercicio_grupo7.html`
 */
function grupo7(params) {
 var lista = document.getElementById("lista");
 console.log(lista);
    lista.style.setProperty("background-color","red");    
}
