<template>
  <h1 v-if="!winner">Searching Pokemon.....</h1>
  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonImage :pokemonId="winner.id" :show="showWinner" />
    <PokemonOptions @slected="comprobarClick($event)" :pokemons="pokeArr" />
  </div>
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemons from "../helpers/pokemonHelper";

export default {
  name: "PokemonPage",
  components: {
    PokemonImage,
    PokemonOptions,
  },
  beforeCreate() {
    console.log("Antes de que se cree el componente");
  },
  //CREATED SE EJECUTA CUANDO SE CREA EL COMPONENTE PERO NO ES MONTADO TODAVIA
  created() {
    console.log("Se ha Creado el componente");
  },
  //BEFORE MOUNT SE EJECUTA UNOS INSTANTES ANTES DE QUE SE MONTE EL COMPONENTE
  beforeMount() {
    console.log("el componente esta listo para ser montado");
  },
  mounted() {
    console.log("Se montó el component PokemonPage");
    this.cargaInicial();
  },
  //BEFORE UPDATE SIRVE PARA INTERCEPTAR EL CICLO DE VIDA DE UN COMPONENTE
  // SE EJECUTA ANTES DE QUEW SE ACTUALICE EL COMPONENTE
  beforeUpdate() {
    console.log("Antes de que se actualice el componete");
  },
  //UPDATE SE EJECUTA CUANDO SE HA ACTUALIZADO EL COMPONENTE
  updated() {
    console.log("Se ha actualizado el componete");
  },
  //BEFORE DESTROY YA SE ENCUENTRA DEPRECADO
  //SE EJECUTA ANTES DE DESTRUIR EL COMPONENTE
  beforeDestroy() {
    console.log("Antes de destruir el componete");
  },
  // DESTROY YA SE ENCUENTRA DEPRECADO
  //SE EJECUTA CUANDO SE DESTRUYA EL COMPONENTE
  beforeDestroy() {
    console.log("destruir el componete");
  },
  data() {
    return {
      pokeArr: [],
      winner: null,
      showWinner: false,
    };
  },
  methods: {
    async cargaInicial() {
      var pokemons = await getPokemons();
      console.log("From component");
      console.log(pokemons);
      this.pokeArr = pokemons;
      this.winner = this.pokeArr[Math.floor(Math.random() * 4)];
    },
    comprobarClick(e) {
      console.log("se seleccionó el:" + e);
      this.showWinner = true;
      if (this.winner.id === e) console.log("Winner");
    },
  },
};
</script>

<style></style>
