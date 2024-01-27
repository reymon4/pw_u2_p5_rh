<template>
  <div class="imageContainer">
    <img
      v-if="!showPokemon"
      class="hide"
      :src="getImage"
      alt="Cannot access to resource"
    />
    <img v-if="showPokemon" :src="getImage" alt="Cannot access to resource" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    getImage() {
      /* backtics */
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      /* "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg" */
    },
  },
};
</script>

<style>
.hide {
  filter: brightness(0);
}
img {
  height: 200px;
  /* Para que las imágenes se sobrepongan */
  position: absolute;
  right: 44%;
}
.imageContainer {
  height: 220px;
}
</style>
