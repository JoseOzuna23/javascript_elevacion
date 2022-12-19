// Prueba
console.log(example);
let example = "I'm the example!"; 
// Lanza un error ya que la variable let se declar despues de llamar a dicha varibale y como let no se eleva tira error   

// Ejercicio I
// se eleve var hello;
console.log(hello);  //se regista como undefined ya que se trata de registar antes de agregar valor a la varibale                               
var hello = 'world'; //No hace efecto se queda asi como esta


// Ejercicio II
var needle = 'haystack'; // Se declara y asigna valor a la variable global
test(); // Se le invoca a la funcion
function test(){ // se declara la funcion 
    var needle = 'magnet'; //Se declara y asigna valor a la variable local
    console.log(needle); // Imprime la varibale local needle dentro de la funcion
}

 // Ejercicio III
var brendan = 'super cool'; // Se declara y asigna valor a la variable global
function print(){ // se declara la funcion
    brendan = 'only okay'; //Se declara y asigna valor a la variable local
    console.log(brendan);// Registra la varibale local brendan dentro de la funcion
}
console.log(brendan); // Imprime la varibale global brendan


// Ejercicio VI
var food = 'chicken';  // Se declara y asigna valor a la variable global
console.log(food); // Imprime la varibale global food
eat(); //Se le invoca a la funcion eat
function eat(){ //se declara una funcion
    // var food; se eleveva la segunda varible local food
    food = 'half-chicken'; // Se declara y asigna valor a la variable local food
    console.log(food); //  Imprime la primera varibale local varibale local food
    var food = 'gone'; //No hace efecto se queda asi como esta
}

 // Ejercicio V
 // en este ejercicio no tenemos ningun registro en consola ya que en el momento de iniciar se incovar a la variable funcion
 // y se eleva arriba, el sistema arroja un error por que se invoca a la varibale de funcion antes de asignar valor
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Ejercicio VI
// se eleve variable global var genre;
console.log(genre);  //se regista como undefined ya que se trata de registar antes de agregar valor a la varibale
var genre = "disco"; //No hace efecto se queda asi como esta
rewind();  //Se le invoca a la funcion rewind
function rewind(){//se declara una funcion
    // se eleva por dececho la valiable var genre;
    genre = "rock";  // Se declara y asigna valor a la variable local rock
    console.log(genre); //  Imprime la primera varibale local varibale local genre
    var genre = "r&b";// Se declara y asigna valor a la variable local genre
    console.log(genre);//  Imprime la segunda varibale local varibale local genre
} 
console.log(genre); // Imprime la varibale global 

// Ejercicio VII
// se eleva por efecto la varible var dojo;
dojo = "san jose"; // Se declara y asigna valor a la variable global dojo
console.log(dojo); // Imprime la varible global dojo
learn();  //Se le invoca a la funcion learn
function learn(){//se declara una funcion
    // se eleva por efecto la varible var dojo;
    dojo = "seatle"; // Se declara y asigna valor a la variable local dojo
    console.log(dojo); // Imprime la varible local dojo
    var dojo = "burbank"; // Se declara y asigna valor a la variable local dojo
    console.log(dojo); // Imprime la varible local dojo
}
console.log(dojo);// Imprime la varible global dojo

// Ejercicio VIII
console.log(makeDojo("chicaago", 65));
console.log(makeDojo("Berkekey", 0));

function makeDojo(name,students){
    const dojo = {};
    dojo.name= name;
    dojo.students = students;
    if (dojo.students>50){
        dojo.hiring = true;
    }
    else if(dojo.students<=0){
        dojo = "closed for now";
    }
    return dojo;

}
