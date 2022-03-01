import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ListPokemons.module.scss";

const ListPokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(
    () =>
      (async () => {
        const response = await fetch(pokemon.url);
        const body = await response.json();
        setPokemonData(body);
        console.log(body.sprites.other["official-artwork"].front_default);
      })(),
    [pokemon.url]
  );

  let types = [];

  if (pokemonData.types) {
    types = pokemonData.types.map(({ type: { name } }) => (
      <p key={name}>{name}</p>
    ));
  }

  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <h2>{pokemon.name}</h2>
        <h3>Types:</h3>
        {types}
      </div>
      <span className={styles.separator}></span>
      {pokemonData.name && (
        <Image
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={`${pokemonData.name} picture`}
          width="120"
          height="120"
        />
      )}
    </li>
  );
};

export default ListPokemon;
