<template>
    <h2>{{title}}</h2>
    <p>{{ count }} <sup>2</sup> = {{ getComputedSquare }}</p>
    <p>{{ count }} <sup>2</sup> = {{ getComputedSquare }}</p>
    <p>{{ count }} <sup>2</sup> = {{ getComputedSquare }}</p>
    <p>{{ count }} <sup>2</sup> = {{ getComputedSquare }}</p>
</template>

<script>
export default {
    //Estas props puedo utilizar como atributos de mi componente (Counter)
    props: ['title'],
    data() {
        return {
            count: 5,
        };
    },
    methods: {
        getSquared() {
            console.log("Processing " + this.count + " squared...");
            return this.count * this.count;
        },
        //PROPIEDAD COMPUTADA MAS no un método
        //Solo se ejecuta una sola vez y guardan los resultados en caché

    },
    computed: {
        // a computed property that returns the square of `count`
        //Solo se ejecuta cuando los valores que pertenecen al método cambian
        getComputedSquare() {
            console.log("Processing " + this.count + "  computed squared...")
            return this.count * this.count;
        },
    },
};
</script>

<style></style>