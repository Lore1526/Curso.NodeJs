class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({
      nombre,
      autor,
    });
  }

  getBookNames() {
    return this.libros.map((x) => x.nombre);
  }
}

const books = [
  {
    nombre: "Harry Potter",
    autor: "J.K Rowling",
    edicion: 2,
    anio: 1997,
  },
  {
    nombre: "El señor de los anillos",
    autor: "J.R Tolkien",
    edicion: 4,
    anio: 2000,
  },
];

const usuario = new Usuario("Lorena", "De Luca", books, [
  "Perro",
  "Gato",
  "Canario",
]);

console.log(usuario);
console.log(usuario.getFullName());
usuario.addMascota("Reptil");
console.log(usuario.mascotas);
console.log(usuario.countMascotas());
usuario.addBook("Bajo la misma estrella", "John Green");
console.log(usuario.libros);
console.log(usuario.getBookNames());
