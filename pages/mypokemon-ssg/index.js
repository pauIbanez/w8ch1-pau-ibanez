import MyListPokemon from "../../components/MyListPokemon/MyListPokemon";

const MyPokemonSSG = ({ pokemon }) => {
  const pokemonsToRender = pokemon.map((poke) => (
    <MyListPokemon key={poke.name} pokemon={poke} />
  ));

  return (
    <>
      <h1>Listado mis pokemon SSG</h1>
      <ul>{pokemonsToRender}</ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://w8-poke-api.herokuapp.com/pokemon");

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default MyPokemonSSG;
