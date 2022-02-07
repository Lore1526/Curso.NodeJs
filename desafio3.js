var express = require("express");
const fs = require("fs");
var app = express();
app.listen(8080);

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  getElementById(id) {
    try {
      let product = fs.promises
        .readFile(this.nombreArchivo, "utf-8")
        .then((x) => {
          let resultado = JSON.parse(x);
          let filtro = resultado.filter((obj) => obj.id == id);
          if (filtro.length > 0) {
            return filtro;
          }
          return null;
        });
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      let productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");

      return productos;
    } catch (error) {
      throw new Error(error);
    }
  }
}

app.get("/productos", (req, res) => {
  let contenedor = new Contenedor("desafio3.txt");
  contenedor.getAll().then((x) => res.send(x));
});
app.get("/productoRandom", (req, res) => {
  let contenedor = new Contenedor("desafio3.txt");
  const id = generateRandomInteger(3);
  contenedor.getElementById(id).then((x) => res.send(x));
});

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}
