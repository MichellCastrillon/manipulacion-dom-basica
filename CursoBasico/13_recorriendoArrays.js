//UN array de objetos
var articulos= [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo:2500},
    {Nombre: "Libro",costo:320},
    {nombre:"Celular", costo: 2000},
    {nombre:"Laptop", costo: 500},
];
//Filtrar elementos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo >= 500
});

//Tarea solo los nombres de los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

//Metodo de find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici"
});

//Traer el nombre de los objetos
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//Validacion verdaderoo falso (indica si existe o no)
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

console.log(articulosBaratos)
