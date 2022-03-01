/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";

const ListPokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() =>
    (async () => {
      const response = await fetch(pokemon.url);
      const body = await response.json();
      setPokemonData(body);
    })()
  );

  let types = [];

  if (pokemonData.types) {
    types = pokemonData.types.map(({ type: { name } }) => (
      <p key={name}>{name}</p>
    ));
  }

  return (
    <li>
      <h2>{pokemon.name}</h2>
      {pokemonData.name && (
        <>
          <h3>Types:</h3>
          {types}
          <img
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={`${pokemonData.name} picture`}
            width="100"
            height="100"
          />
        </>
      )}
    </li>
  );
};

export default ListPokemon;
