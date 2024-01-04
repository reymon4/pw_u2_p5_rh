<template>
  <img alt="Vue logo" src="https://media.giphy.com/media/YwGbYdq7KLZPG/giphy.gif">
  <Counter title="Counter1"></Counter>
  <Counter title="Counter2"/>
</template>

<script>
/* Cuando importemos siempre ponemos el nombre del archivo. Es un estándar */
import Counter from './components/Counter.vue'
export default {
  name: 'App',
  components: {
    Counter
  }
}
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
