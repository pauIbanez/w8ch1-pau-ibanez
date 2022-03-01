import MyListPokemon from "../../components/MyListPokemon/MyListPokemon";

const MyPokemonSSR = ({ pokemon }) => {
  const pokemonsToRender = pokemon.map((poke) => (
    <MyListPokemon key={poke.name} pokemon={poke} />
  ));

  return (
    <>
      <h1>Listado mis pokemon SSR</h1>
      <ul>{pokemonsToRender}</ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://w8-poke-api.herokuapp.com/pokemon/pokemon"
  );

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default MyPokemonSSR;
