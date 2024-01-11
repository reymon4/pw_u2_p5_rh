<template>
  <img
    alt="Vue logo"
    src="https://media2.giphy.com/media/Sd9XrDFZZ0Q0OXAdJM/giphy.gif?cid=ecf05e47w43qzv6sua9kx1o3qlxn7quq7u580feiymox3khk&ep=v1_stickers_search&rid=giphy.gif&ct=s"
    
  />
  <!-- <Counter title="Counter1" :value="5" />--->
  <!-- Escribo la directiva v:bind, cuando requiera que procese código js y en los valores númericos -->
  <!-- <Counter title="Counter2" :value="calcularValor()" />-->
  <Pokemon/>
</template>

<script>
/* Cuando importemos siempre ponemos el nombre del archivo. Es un estándar */

import Pokemon from "./components/Pokemon.vue";
import Question from "./components/Question.vue";
export default {
  name: "App",
  components: {
    Pokemon
  },
  methods: {
    calcularValor() {
      return 5 + 5 * 180;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
