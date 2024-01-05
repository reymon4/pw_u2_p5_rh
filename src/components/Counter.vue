<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <p>{{ count }} <sup>2</sup> = {{ getComputedSquare }}</p>
        <!--También puedo escribir con el siguiente atajo: -->
        <button @click="suma()">+</button>
        <button v-on:click="resta()">-</button>
    </div>
</template>

<script>
export default {
    //Estas props puedo utilizar como atributos de mi componente (Counter)
    //Puedo transmitir la info de componente padre a hijo
    //Misma forma de uso de una propiedad reactiva
    props: {
        title: String,
        value: {
            type: Number,
            required: false,//Este es un validador para que el valor sea obligatorio
            default: 100,
            //El validator es un método
            validator(value) {
                return value > 100;
            }
        }
    },
    //*  props: ['title', 'value'],*//
    data() {
        return {
            count: this.value,
        };
    },
    methods: {
        getSquared() {
            console.log("Processing " + this.count + " squared...");
            return this.count * this.count;
        },
        suma() {
            this.count++;
        },
        resta() {
            this.count--;
        }

    },
    //PROPIEDAD COMPUTADA MAS no un método
    //Solo se ejecuta una sola vez y guardan los resultados en caché
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

<style>
button {
    background: #7c68ed;
    border-radius: 5px;
    border: 1px solid black;
    color: white;
    cursor: pointer;
    margin: 0px 5px;
    padding: 5px 15px;

}

button:hover {
    background-color: #a497ec;
}

h2 {
    font-family: sans-serif;
}

p {
    font-weight: normal;
    font-family: cursive;
}
.container{
    display: grid;
    grid-row-end: 2;
    justify-content: center;
    align-items: center;
    background: rgb(249, 158, 203);
    margin: 15px 0px;
   
}
</style>