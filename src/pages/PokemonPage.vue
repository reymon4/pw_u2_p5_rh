<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImage :pokemonId="8" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonIdFachada from "../helpers/pokemonHelper"

getPokemonIdFachada()
export default {
  name: "PokemonPage",
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style></style>
