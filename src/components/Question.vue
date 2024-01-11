<template>
  <img v-if="img != null" v-bind:src="img" alt="Cannot be visualized" />
  <div class="dark"></div>
  <div class="container">
    <input v-model="question" type="text" />
    <p>Remember to finish the interrogation sign (?)</p>
    <div v-if="validQuestion == true">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      validQuestion: false,
    };
  },
  watch: {
    question(value, oldValue) {
      this.validQuestion = false;
      console.log(value);
      console.log(oldValue);
      if (!value.includes("?")) return;
      //Consumo de API
      this.consumirAPI();
      this.validQuestion = true;
    },
  },
  methods: {
    async consumirAPI() {
      this.answer = "Pensando.";
      this.answer = "Pensando..";
      this.answer = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );

      console.log(answer);
      console.log(image);
      this.answer = answer === "yes" ? "Sí" : "No";
      this.img = image;
    },
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.dark {
  background-color: rgba(0, 0, 0, 0.5);
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
.container {
  position: relative;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 20px;
  margin-top: 20px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 50px;
}
</style>
