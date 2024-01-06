<template>
  <div class="container">
    <header>
      <h1>Calculator &#128223;</h1>
    </header>
    <nav>
      <section>
        <div class="calculator">
          <div class="display"><label id="idResultado" for=""></label></div>

          <button id="idC" class="btn_2" onclick="obtenerCantidad('R')">
            C
          </button>
          <!--flecha izq-->
          <button id="idFlecha" @click="obtenerCantidad('R')">&#129032;</button>
          <button id="idPorcentaje" @click="obtenerCantidad('/')">&#37;</button>
          <button id="idSiete" @click="obtenerCantidad(7)">7</button>
          <button id="idOcho" @click="obtenerCantidad(8)">8</button>
          <button id="idNueve" @click="obtenerCantidad(9)">9</button>
          <!--mult-->
          <button id="idX" @click="obtenerCantidad('*')">&#10005;</button>
          <button id="idCuatro" @click="obtenerCantidad(4)">4</button>
          <button id="idCinco" @click="obtenerCantidad(5)">5</button>
          <button id="idSeis" @click="obtenerCantidad(6)">6</button>
          <button id="idMenos" @click="obtenerCantidad('-')">-</button>
          <button id="idUno" @click="obtenerCantidad(1)">1</button>
          <button id="idDos" @click="obtenerCantidad(2)">2</button>
          <button id="idTres" @click="obtenerCantidad(3)">3</button>
          <button id="idMas" @click="obtenerCantidad('+')">+</button>
          <button id="idCero" class="btn_2" @click="obtenerCantidad(0)">
            0
          </button>
          <button id="idPunto" @click="obtenerCantidad('.')">.</button>
          <!--igual-->
          <button id="idIgual" @click="obtenerCantidad('=')">&#61;</button>
        </div>
      </section>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numX: [],
      operador: "",
      resultado: "",
      numY: [],
    };
  },
  methods: {
    resetearVariables() {
      this.numX = [];
      this.numY = [];
      this.operador = "";
      this.resultado = 0;
      document.getElementById("idResultado").innerText = "";
    },
    obtenerCantidad(tmp) {
      if (this.operador === "") {
        if (Number.isInteger(tmp)) {
          this.numX.push(tmp);
          document.getElementById("idResultado").innerText = this.numX.join("");
        } else if (typeof tmp === "string") {
          this.operador = tmp;
          document.getElementById("idResultado").innerText += tmp;
        }
      } else {
        if (
          tmp === "R" ||
          document.getElementById("idResultado").textContent.includes("=")
        ) {
          this.resetearVariables();
        } else {
          if (Number.isInteger(tmp)) {
            this.numY.push(tmp);
            document.getElementById("idResultado").innerText += tmp;
          } else if (tmp === "=") {
            let x = parseInt(this.numX.join(""));
            let y = parseInt(this.numY.join(""));
            let resultado = 0;
            switch (this.operador) {
              case "+":
                resultado = x + y;
                break;
              case "-":
                resultado = x - y;
                break;
              case "*":
                resultado = x * y;
                break;
              case "/":
                resultado = x / y;
                break;
            }
            document.getElementById("idResultado").innerText +=
              " = " + resultado;
          }
        }
      }
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

.calculator {
  display: grid;
  /*grid-template-columns: 70px 70px 70px 70px 70px;*/
  /*grid-template-columns:100px repeat(4, 70px);*/
  grid-template-columns: repeat(4, 70px);
  grid-template-rows: 150px repeat(4, 80px) 50px;
  background-color: skyblue;
  padding: 15px;
  border-radius: 30px;
  /*horizontal, vertical, difuminado, tamaño*/
  box-shadow: 10px 15px 30px 5px #a2d2ff;
}
.display {
  /*Vamos a hacer que ocupe el número de columnas de la calculadora*/
  grid-column: span 4;
  padding: 25px;
  /*arriba, izq, abajo, der*/
  margin: 10px 5px 10px 5px;
  background-color: #bde0fe;
  border-radius: 32px;
  text-align: right;
  box-shadow: 10px 10px 20px -10px;
}
button {
  margin: 5px;
  border-radius: 20px;
  border: none;
  background-color: #bde0fe;
  box-shadow: 5px 5px 10px -5px black;
}
button:active {
  background: rgb(99, 221, 230);
}
body {
  background: #4b87c7;
}

* {
  color: rgb(255, 255, 255);
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
