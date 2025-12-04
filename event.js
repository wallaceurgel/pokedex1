const form = document.querySelector(".form");
const input = document.querySelector(".inputSearch");
const buttonPrev = document.querySelector(".btn");
const buttonNext = document.querySelector(".btn-next");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const valor = input.value.toLowerCase();
  const num = Number(valor);

if (isNaN(num)) {
  mostraPokemon(valor);
  

}else if (num >= 1 && num <= 721) {
  pokemonAtual = num;
  mostraPokemon(num);

} else { alert("a pokedex possue apenas 721 pokemons");
  pokemonAtual = 1;
  mostraPokemon(pokemonAtual);
} 
input.value = "";
});

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
 