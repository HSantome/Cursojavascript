function Producto(nombre,precio,stock,cat){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cat = cat;

}
let productoA = new Producto("Alfajor Blanco",150, 100, "glaseado")
let productoB = new Producto("Alfajor Negro",150, 100, "chocolate")
let productoC = new Producto("Alfajor Frutal", 120, 10, "fruta")

let listaProductos = [productoA, productoB, productoC]

listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let catalogo = document.getElementById("catalogo")

function render(lista){
    catalogo.innerHTML = ""
    for(const prod of lista){
        let card = document.createElement("div")
    card.className ="card"
    card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p`
    catalogo.append(card)
    }
}

render (listaProductosConStock)

let categoriaElegida = ''

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    render (filtroActual)
}

let botonTodos = document.getElementById("todos")
botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})




/*
let input1 = document.getElementById("nombre")
let nombreIngresado = ''
input1.addEventListener('change', ()=>{nombreIngresado = input1.value
                                       input1.value = ""})

function mostrarPorConsola (nombre){
    console.log("Bienvenido" + nombre)
}

let boton = document.getElementById("primerBoton")
boton.addEventListener("click", ()=>{mostrarPorConsola(nombreIngresado)})

*/