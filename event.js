const form = document.querySelector(".form");
const input = document.querySelector(".inputSearch");
const buttonPrev = document.querySelector(".btn");
const buttonNext = document.querySelector(".btn-next");
const buttonInfo = document.querySelector(".info");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value <= 721) {
    pokemonAtual = 1;
    mostraPokemon(input.value.toLowerCase());
  } else {
    pokemonAtual = 1;
    alert("a pokedex possue apenas 721 pokemons");
    mostraPokemon(pokemonAtual);
  }
  input.value = "";
});
//buttonInfo.addEventListener("click",()=>{
 // mostraPokemonInfo(pokemonAtual);
//});
buttonPrev.addEventListener("click", () => {
  if (pokemonAtual > 1) {
    pokemonAtual -= 1;
    mostraPokemon(pokemonAtual);
  } else {
    mostraPokemon(pokemonAtual);
  }
});
buttonNext.addEventListener("click", () => {
  if (pokemonAtual >= 721) {
    pokemonAtual = 1;
    alert("a pokedex possue apenas 721 pokemons");
  } else {
    pokemonAtual += 1;
  }
  mostraPokemon(pokemonAtual);
});
