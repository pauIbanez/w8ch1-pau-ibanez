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
  const response = await fetch("http://localhost:4000/pokemon");

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default MyPokemonSSG;
