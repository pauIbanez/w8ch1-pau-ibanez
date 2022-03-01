import { useEffect, useState } from "react";
import ListPokemon from "../components/ListPokemon/ListPokemon";

const Pokemon = () => {
  const [pokemonsToRender, setPokemonsToRender] = useState([]);

  useEffect(() =>
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );

      const { results: pokemon } = await response.json();

      setPokemonsToRender(
        pokemon.map((poke) => <ListPokemon key={poke.name} pokemon={poke} />)
      );
    })()
  );
  return (
    <>
      <h1>Listado pokemon pokeAPI CSR</h1>
      <ul>{pokemonsToRender}</ul>
    </>
  );
};

export default Pokemon;
