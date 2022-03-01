import MyListPokemon from "../../components/MyListPokemon/MyListPokemon";

const MyPokemonISR = ({ pokemon }) => {
  const pokemonsToRender = pokemon.map((poke) => (
    <MyListPokemon key={poke.name} pokemon={poke} />
  ));

  return (
    <>
      <h1>Listado mis pokemon ISR</h1>
      <ul>{pokemonsToRender}</ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://w8-poke-api.herokuapp.com/pokemon/pokemon"
  );

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
    revalidate: 20,
  };
};

export default MyPokemonISR;
