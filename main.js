//Hay 151 pokemons en la primera generacion
//100 pokemons segunda
//135 pokemons tercera
//108 pokemons cuarta
//155 pokemons quinta
//72 pokemons sexta
//89 pokemons septima
//80 pokemons octava
//Lo suyo seria que se seleccionase la generacion y apareciera la pokedex
//Se pueden poner distintas variables con distintos numeros para empezar a contar

let pokemon;
let inicio;
let limite;
let contenedor=document.getElementById("contenedor")
let dato;
let contador=1;

async function pokedex(inicio, limite) {

    while(inicio<=limite) {

    let resultado = await fetch("https://pokeapi.co/api/v2/pokemon/"+inicio+"/")
    dato = await resultado.json();

        pokemon=dato;

        let datos_pokemon=document.createElement("div");
        
        //Creacion de la imagen
        let img=document.createElement("img");
        img.src=(pokemon.sprites.front_default);
        datos_pokemon.append(img)

        //Creacion del nombre
        let p=document.createElement("p");
        p.innerHTML=(pokemon.name);
        datos_pokemon.append(p)

        
        //Meter en el html
        contenedor.appendChild(datos_pokemon);

        inicio++;
    }
}

//borrar
function borrar() {
const list = document.getElementById("contenedor");
while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}
}

//-----------------------------------PRIMERA GENERACION----------------------------------------
document.getElementById("primera").addEventListener("click", function generate() {
    borrar();
    inicio=1;
    limite=151;
    pokedex(inicio, limite);
})


//-----------------------------------SEGUNDA GENERACION----------------------------------------
document.getElementById("segunda").addEventListener("click", function generate() {
    borrar();
    inicio=152;
    limite=251;
    pokedex(inicio, limite);
})
//-----------------------------------TERCERA GENERACION----------------------------------------
document.getElementById("tercera").addEventListener("click", function generate() {
    borrar();
    inicio=252;
    limite=386;
    pokedex(inicio, limite);
})
//-----------------------------------CUARTA GENERACION----------------------------------------
document.getElementById("cuarta").addEventListener("click", function generate() {
    borrar();
    inicio=387;
    limite=494;
    pokedex(inicio, limite);
})
//-----------------------------------QUINTA GENERACION----------------------------------------
document.getElementById("quinta").addEventListener("click", function generate() {
    borrar();
    inicio=495;
    limite=651;
    pokedex(inicio, limite);
})
//-----------------------------------SEXTA GENERACION----------------------------------------
document.getElementById("sexta").addEventListener("click", function generate() {
    borrar();
    inicio=650;
    limite=723;
    pokedex(inicio, limite);
})
//-----------------------------------PRIMERA GENERACION----------------------------------------
document.getElementById("septima").addEventListener("click", function generate() {
    borrar();
    inicio=722;
    limite=812;
    pokedex(inicio, limite);
})
//------------------------------------OCTAVA GENERACION-----------------------------------
document.getElementById("octava").addEventListener("click", function generate() {
    borrar();
    inicio=813;
    limite=892;
    pokedex(inicio, limite);
})
