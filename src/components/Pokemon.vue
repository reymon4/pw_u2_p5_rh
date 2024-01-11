<template>
  <div class="container">
    <h2>Pokemon API</h2>
    <p>Pokemon id:</p>
    <input type="text" v-model="id" />

    <div v-if="consulta" class="tabla">
      <table>
        <tr>
          <td><label>Nombre:</label></td>
          <td>{{ name }}</td>
        </tr>
        <tr>
          <td><label>Weight:</label></td>
          <td>{{ weight }}</td>
        </tr>
        <tr>
          <td><label>Experience:</label></td>
          <td>{{ experience }}</td>
        </tr>
      </table>
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
      this.consulta = false;
      console.log(value);
      console.log(oldValue);
      if (!value) return;
      // Consumo de API
      this.consumirAPI();
      this.consulta = true;
    },
  },
  methods: {
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
}
.tabla {
  width: 200px;
  height: 80px;
  background: #7db1ea;
  border-radius: 15px;
  padding: 20px 20px;
  box-shadow: 0px 0px 20px 10px rgb(99, 221, 230);
  margin-top: 30px;
  align-items: center;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 50px;
}
</style>
