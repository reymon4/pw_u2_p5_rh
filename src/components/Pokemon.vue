<template>
  <div class="container">
    <h2>Pokemon API</h2>
    <p class="id">ID</p>
    <input @keypress="calcularId" type="text" id="pokemonId" v-model="id" />

    <div v-if="consulta == true" class="tabla">
      <label for="">NAME</label>
      <p>{{ name }}</p>

      <label for="">WEIGHT</label>
      <p>{{ weight }}</p>

      <label for="">EXPERIENCE</label>
      <p>{{ experience }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      weight: null,
      experience: null,
      consulta: false,
    };
  },
  watch: {
    id(value, oldValue) {
      console.log(value);
      console.log(oldValue);
    },
  },
  methods: {
    calcularId(event) {
      this.consulta = false;
      /* console.log("presionando...");
      console.log(event.charCode); */
      if (event.charCode === 13 && this.id) {
        this.consumirAPI();
        this.consulta = true;
      }
    },
    async consumirAPI() {
      this.answer = "Pensando.";
      this.answer = "Pensando..";
      this.answer = "Pensando...";
      const { name, weight, base_experience } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + this.id
      ).then((r) => r.json());
      this.name = name;
      this.weight = weight;
      this.experience = base_experience;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
input:focus {
  outline: none;
}
input {
  border-radius: 10px;
  width:300px;
  height: 30px;
  text-align: center;
  font-size: 25px;
  font-style: bold;
}
.tabla {
  display: grid;
  grid-template-rows: repeat(6, 75px);
  width:300px;
  height: 100%;
  border-radius: 15px;
  margin-top: 30px;
  align-items: center;
}
p {
  font-size: 25px;
  font-style: bold; 
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 15px;
  background: #F2C6BD;
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
  color:white;
}
label{
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style:oblique;
  font-size: 20px;
  background: #DABDF2;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;

}
.id{
 background: none;
}

</style>
