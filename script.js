const pokemonName = document.querySelector(".pokemonNome");
const pokemonNumber = document.querySelector(".pokemonNum");
const pokemonImage = document.querySelector(".pokemonImg");
const PokemonInfo = document.querySelector(".pokemonDados")

//const input = document.querySelector(".inputSearch"); tentando fazer com que o input >721 volte para o pokemon 1

let pokemonAtual;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();

  return data;
};

const mostraPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  if (data.id < 650) {
    pokemonAtual = data.id;
    pokemonImage.src =
      data[`sprites`][`versions`][`generation-v`][`black-white`][`animated`][
        `front_default`
      ];
  } else {
    pokemonImage.src =
      data[`sprites`][`versions`][`generation-vi`][`omegaruby-alphasapphire`][
        `front_default`
      ];
    pokemonAtual = data.id;
  }
  if (data.id > 721 /* && input > 720*/) {
    data.id = 0;
    pokemonAtual = data.id;
  } else {
    pokemonAtual = data.id;
  }
};
const mostraPokemonInfo = async (pokemon)=>{
   const data = await fetchPokemon(pokemon);
  console.log = PokemonInfo.innerHTML = data['types']['0']['type']['name'];
}
mostraPokemon(1);
