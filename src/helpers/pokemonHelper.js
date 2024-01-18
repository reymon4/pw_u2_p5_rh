const getPokemonId = () => {
    const pokemon1 = getRandomNumber(600);
    const pokemon2 = getRandomNumber(600);
    const pokemon3 = getRandomNumber(600);
    const pokemon4 = getRandomNumber(600);
    const pokemonArr = [pokemon1, pokemon2, pokemon3, pokemon4];
    console.log(pokemonArr);
    return pokemonArr;
  };
  
  const getPokemonName = async ([p1, p2, p3, p4]) => {
    const name1 = await consultarNombre(p1);
    const name2 = await consultarNombre(p2);
    const name3 = await consultarNombre(p3);
    const name4 = await consultarNombre(p4);
  
    const pk1 = {
      id: p1,
      name: name1,
    };
    const pk2 = {
      id: p2,
      name: name2,
    };
    const pk3 = {
      id: p3,
      name: name3,
    };
    const pk4 = {
      id: p4,
      name: name4,
    };
  
    const arreglo = [pk1, pk2, pk3, pk4];
    console.log(arreglo);
    return arreglo;
  };
  
  const getPokemons = async () => {
    const idArray = getPokemonId();
    return await getPokemonName(idArray);
  };
  
  async function consultarNombre(id) {
    const data = await consumirAPI(id);
    return data.name;
  }
  
  const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) =>
      r.json()
    );
  };
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  export default getPokemons; 