class Usuario{

    constructor(nombre,apellido,libros,mascotas){
    this.nombre=nombre;
    this.apellido=apellido;
    this.libros=libros;
    this.mascotas=mascotas;
    }
    getFullName(){
        let usuario = `${this.nombre} ${this.apellido}`
        return usuario;
    }

    addMascota(mascota){
    this.mascotas.push(mascota);
    }

    countMascotas(){
       return this.mascotas.length;
        
    }

    addBook(nombre,autor){
        const libro ={
            nombre:nombre,
            autor:autor
            };
        this.libros.push(libro);
    }

    getBookNames(){
        let titulosLibros = this.libros.map(x => x.nombre);
        return titulosLibros;
    }
};
var usuario = new Usuario('Lorena','De Luca',[{nombre:'Harry Potter',autor:'J.K Rowling',edicion:2,anio:1997},{nombre:'El señor de los anillos',autor:'J.R Tolkien', edicion:4,anio:2000}],['Perro','Gato','Canario'])
console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.addMascota('Reptil'));
console.log(usuario.mascotas);
console.log(usuario.countMascotas());
console.log(usuario.addBook('Bajo la misma estrella','John Green'));
console.log(usuario.libros);
console.log(usuario.getBookNames());
