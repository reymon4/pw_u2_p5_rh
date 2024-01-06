<template>
  <img
    alt="Vue logo"
    src="https://media.giphy.com/media/YwGbYdq7KLZPG/giphy.gif"
  />
  <!-- <Counter title="Counter1" :value="5" />--->
  <!-- Escribo la directiva v:bind, cuando requiera que procese código js y en los valores númericos -->
  <!-- <Counter title="Counter2" :value="calcularValor()" />-->
  <Question />
</template>

<script>
/* Cuando importemos siempre ponemos el nombre del archivo. Es un estándar */

import Question from "./components/Question.vue";
export default {
  name: "App",
  components: {
    Question
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
