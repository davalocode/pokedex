let url = window.location;
let url_string = url.toString();

let posicion_igual = (url_string.indexOf("=")) + 1;
let longitud_url = url_string.length;

let id_pokemon = url_string.slice(posicion_igual, longitud_url)

let contenedor_principal=document.getElementById("contenedor");

async function generate() {
    let resultado = await fetch("https://pokeapi.co/api/v2/pokemon/"+id_pokemon+"/")
    dato = await resultado.json();

    let pokemon=dato;

    console.log(dato)

    let datos_pokemon=document.createElement("div");
        
        //Creacion de la imagen cara
        let img=document.createElement("img");
        img.src=(pokemon.sprites.front_default);
        datos_pokemon.append(img);

        //Creacion de la imagen espalda
        let img_espalda=document.createElement("img");
        img_espalda.src=(pokemon.sprites.back_default);
        datos_pokemon.append(img_espalda);

        //Numero de pokemon
        let numero_pokemon=document.createElement("p");
        numero_pokemon.innerHTML=("Nº PokeDex: " + id_pokemon);
        datos_pokemon.append(numero_pokemon);

        //Creacion del nombre
        let p=document.createElement("p");
        p.innerHTML=(pokemon.name);
        datos_pokemon.append(p);

        //Creacion del tipo
        let tipo=document.createElement("p");
        tipo.innerHTML=(pokemon.types[0].type.name);
        datos_pokemon.append(tipo);

        //Creacion de la experiencia
        let experiencia=document.createElement("p");
        experiencia.innerHTML=("Experience: "+pokemon.base_experience);
        datos_pokemon.append(experiencia);
        
        //Meter en el html
        contenedor_principal.appendChild(datos_pokemon);

}

generate();