const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async save(producto) {
    try {
      let productos = JSON.parse(
        await fs.promises.readFile(this.nombreArchivo, "utf-8")
      );
      let id;
      if (productos.length === 0) {
        id = 1;
      } else {
        id = productos[productos.length - 1].id + 1;
      }
      producto.id = id;
      productos.push(producto);
      await fs.promises.writeFile(
        this.nombreArchivo,
        JSON.stringify(productos)
      );
      return id;
    } catch (err) {
      console.log("Hubo un error" + err);
    }
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
  async deleteById(id) {
    try {
      let productos = JSON.parse(
        await fs.promises.readFile(this.nombreArchivo, "utf-8")
      );
      let resultadoFiltrado = productos.filter((obj) => obj.id !== id);
      if (resultadoFiltrado.length > 0) {
        await fs.promises.writeFile(
          this.nombreArchivo,
          JSON.stringify(resultadoFiltrado)
        );
      }
    } catch {
      throw new Error(error);
    }
  }
  async deleteAll() {
    try {
      await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]), "utf-8");
    } catch (error) {
      throw new Error(error);
    }
  }
}

const archivo = new Contenedor("desafio2.txt");
// archivo.save({
//   title: "Blusa",
//   price: 99.5,
//   thumbnail:
//     "https://www.benka.com.ar/productos/blusa-lino-spandex-doble-volado-carioca/?pf=gs&utm_campaign=Lobo_AO_Always-On_Smart-Shopping&utm_source=google&utm_medium=cpc&utm_content=130287592452_534417945066&utm_term=&gclid=Cj0KCQiAi9mPBhCJARIsAHchl1w7JWK6jJEkvdyuiGVIpvigMSPyN2R5UeqDyCcvLuz1qlIbwHUYqsYaAq-KEALw_wcB",
// });

// console.log(archivo.getElementById(25).then((res) => console.log(res)));
// console.log(archivo.getElementById(2).then((res) => console.log(res)));
// console.log(archivo.getAll().then((res) => console.log(res)));
// console.log(archivo.deleteById(2).then(res => console.log(res)));
// console.log(archivo.deleteAll().then((res) => console.log(res)));
