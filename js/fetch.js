const input = document.querySelector("input")
const button = document.querySelector("button")
const pokemoncontainer = document.querySelector(".pokemon-container")


button.addEventListener('click', (e) => {
    e.preventDefault();
    traerpokemon(input.value);
  })
  
  function traerpokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data)=> {
    crearpokemon(data);
  });
 }

  function crearpokemon (pokemon){
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
  
    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const h4 = document.createElement("h4");
    h4.textContent = pokemon.Stench;
  
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
  
    pokemoncontainer.appendChild(div)
  }


