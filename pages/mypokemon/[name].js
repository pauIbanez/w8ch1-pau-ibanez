import { useRouter } from "next/router";
import MyListPokemon from "../../components/MyListPokemon/MyListPokemon";

const PokemonDetail = ({ pokemon }) => {
  const router = useRouter();
  return (
    <>
      <h1>POKEMON DETAILS</h1>
      {router.isFallback ? (
        <h2>LOADING</h2>
      ) : (
        <>{pokemon && <MyListPokemon pokemon={pokemon} />}</>
      )}
    </>
  );
};

export async function getStaticProps({ params: { name } }) {
  const response = await fetch("https://w8-poke-api.herokuapp.com/pokemon");
  const pokemons = await response.json();
  const pokemon = pokemons.find((pokemon) => pokemon.name === name);
  return {
    props: {
      pokemon,
    },
  };
}

export const getStaticPaths = async () => {
  const response = await fetch("https://w8-poke-api.herokuapp.com/pokemon");
  const pokemon = await response.json();

  const names = pokemon.map((poke) => ({ params: { name: poke.name } }));

  return {
    paths: names,
    fallback: true,
  };
};

export default PokemonDetail;
