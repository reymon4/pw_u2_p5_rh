<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImage :pokemonId="8" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemons from "../helpers/pokemonHelper"

getPokemons()
export default {
  name: "PokemonPage",
  components: {
    PokemonImage,
    PokemonOptions,
  },
  mounted(){
    console.log("Se montó el component PokemonPage")
    this.cargaInicial()
    
  },
  methods:{
    async cargaInicial(){
      const arregloPokemons = await getPokemons()
    console.log("From component")
    console.log(arregloPokemons)
    }
  }
};
</script>

<style></style>
