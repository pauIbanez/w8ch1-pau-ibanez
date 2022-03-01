import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../ListPokemon/ListPokemons.module.scss";

const MyListPokemon = ({ pokemon }) => {
  const router = useRouter();

  if (!pokemon) {
    return <></>;
  }
  const types = pokemon.types.map((type) => <p key={type}>{type}</p>);

  const gotoDetails = () => {
    router.push(`/mypokemon/${pokemon.name}`);
  };

  return (
    <li className={styles.container} onClick={gotoDetails}>
      <div className={styles.info}>
        <h2>{pokemon.name}</h2>
        <h3>Types:</h3>
        {types}
      </div>
      <span className={styles.separator}></span>
      {pokemon.name && (
        <Image
          src={pokemon.imageURL}
          alt={`${pokemon.name} picture`}
          width="120"
          height="120"
        />
      )}
    </li>
  );
};

export default MyListPokemon;
