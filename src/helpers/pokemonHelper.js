const getPokemonId = () => {
  const pokemon1 = getRandomNumber(600);
  const pokemon2 = getRandomNumber(600);
  const pokemon3 = getRandomNumber(600);
  const pokemon4 = getRandomNumber(600);
  const pokemonArr=[pokemon1,pokemon2,pokemon3,pokemon4]
  console.log(pokemonArr)
  console.log();
};
/* Para exportar la funcionalidad, debemos exportarla con una función "fachada" */
const getPokemonIdFachada=()=>{
    getPokemonId()
}

const getPokemonName=(array)=>{
const name1 = consumirAPI(arreglo[0]);
const name2 = consumirAPI(arreglo[1]);
const name3 = consumirAPI(arreglo[2]);
const name4 = consumirAPI(arreglo[3]);


}
function consumirAPI(id){
    return ""
}
function getRandomNumber(max) {
    return Math.floor(Math.random() *  max)+1;
}


export default getPokemonIdFachada