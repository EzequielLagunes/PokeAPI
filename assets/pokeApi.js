//para obtener el input del HTML
const input = document.querySelector("#inputPokemon");
//Obtener el boton del HTML
const botton = document.querySelector("#botonPokemon");
//Obtenermos el contenedpr de los pokemon desde HTML
const pokemonContainer = document.querySelector("#cardPokemon");

botton.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
    e.preventDefault(); //evitamos que el navegador se recargue
    traerPokemon(input.value); //llamamos a la funcion traerPokemon, pasandole el valor del input
}
);

//función para llamar a los pokemones
function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // ser realiza una petición a una URL

//cuando la promesa es resuelta, asignamos la info a la variable res
    .then(res => res.json())
    .then((data) => {
//llamamos a la funcion crearPokemon, pasandole la informacion del pokemon
        crearPokemon(data); 
    });
}

function crearPokemon(pokemon){

    const imgPokemon = document.createElement("img"); //creamos un elemento img donde pondremos la imagen
imgPokemon.src = pokemon.sprites.front_default;//establecemos la imagen de nuestro pokemon, sacamos el sprite del json

//Creamos un elemento h3 donde pondremos el nombre de nuestro pokemon.
const nombrePokemon = document.createElement("h3");

//Se establece el nombre de nuestro pokemon, sacamos el nombre del .json
nombrePokemon.textContent = pokemon.name;

//creamos un elemento h3 donde pondremos el tipo de nuestro pokemon
const idPokemon = document.createElement("h3");
idPokemon.textContent = pokemon.id;

//Le damos un separador a cada pokemon
const separador = document.createElement("hr");

//creamos un elemento div donde ponemos el numero de nuestro pokemon
const div = document.createElement("div");

div.appendChild(nombrePokemon); //agregamos el nombre div
div.appendChild(imgPokemon); // agregamos la imagen al div
div.appendChild(idPokemon); //agregamos el tipo del pokemon
div.appendChild(separador); // agregamos el separador

pokemonContainer.appendChild(div);//agregamos el dic al contenedor de los pokemon.

}

traerPokemon(); //llamamos a la función traerPokemon, para que nos traiga los pokemones que queremos