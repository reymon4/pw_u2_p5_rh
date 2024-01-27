<template>
  <PokemonPage />
</template>

<script>
import PokemonOptionsVue from "./components/PokemonOptions.vue";
/* Cuando importemos siempre ponemos el nombre del archivo. Es un estándar */

import PokemonPage from "./pages/PokemonPage.vue";

export default {
  components: {
    PokemonPage,
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
