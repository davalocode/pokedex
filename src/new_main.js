let numero_pokemon=1
let pokemon;
let contenedor=document.getElementById("contenedor")
let dato;
let contador=1;
let numero_generacion=1;

async function pokedex() {

    let resultado = await fetch("https://pokeapi.co/api/v2/generation/"+numero_generacion+"/");
    dato = await resultado.json();
    console.log(dato);

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

        contador++;
    }

pokedex();