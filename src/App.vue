<template>
  <div class="container" v-if="showGame">
    <h1>Casino Pokemon</h1>
    <h2 class="puntaje">Puntaje:{{ puntaje }}</h2>
    <h2 class="intento">Intento:{{ intento }}</h2>
    <CorrectionE1 :texto="texto1" :urlImg="url1" />
    <CorrectionE1 :texto="texto2" :urlImg="url2" />
    <CorrectionE1 :texto="texto3" :urlImg="url3" />

    <div class="game">
      <button @click="play()">Play</button>
    </div>
  </div>
  <div v-if="showLoser">
    <h1>Has finalizado tus cinco intentos</h1>
    <h1>Game over. Try again!</h1>
    <button @click="restart">Restart Game</button>
  </div>

  <div v-if="showWinner">
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Felicitaciones has ganado un premio de $10000</h1>
    <button @click="restart">Restart Game</button>
  </div>
</template>

<script>
/* Cuando importemos siempre ponemos el nombre del archivo. Es un estándar */

/* import PokemonPage from "./pages/PokemonPage.vue";
import Question from "./components/Question.vue"; */
import CorrectionE1 from "./components/CorrectionE1.vue";
export default {
  components: {
    CorrectionE1,
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "xxxxxxxxx",
      texto2: "xxxxxxxxx",
      texto3: "xxxxxxxxx",
      showWinner: false,
      showLoser: false,
      showGame: true,
    };
  },
  methods: {
    async play() {
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;
      this.reviewResult();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    reviewResult() {
      this.intento++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje = this.puntaje + 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje = this.puntaje + 1;
      }
      if (this.puntaje >= 10) {
        this.showWinner = true;
        this.showGame = false;
        this.showLoser = false;
      }
      if (this.intento === 5) {
        this.showLoser = true;
        this.showGame = false;
        this.showWinner = false;
      }
    },
    restart() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "xxxxxxxxx";
      this.texto2 = "xxxxxxxxx";
      this.texto3 = "xxxxxxxxx";
      this.showWinner = false;
      this.showLoser = false;
      this.showGame = true;
    },
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
.container {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
}
h1 {
  grid-column: span 3;
  text-align: center;
}

.puntaje {
  grid-column: 2;
}
.intento {
  grid-column: span 1;
}
.game {
    grid-column: span 3;
    margin: 0 auto; 
    display: flex; 
    align-items: center; 
  }


</style>
