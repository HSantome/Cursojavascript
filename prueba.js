function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cat = cat;
}
let productoA = new Producto("Alfajor Blanco",150, 100, "glaseado")
let productoB = new Producto("Alfajor Negro",150, 100, "chocolate")
let productoC = new Producto("Alfajor Frutal", 120, 5, "fruta")

let listaProductos = [productoA, productoB, productoC]

listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let prueba = document.getElementById ("prueba")

function render(lista){
    prueba.innerHTML="" 
    
    for (const prod of listaProductos){
        let card = document.createElement("div")
    
        card.className = "card"
    
        card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p`
    
        prueba.append(card)
    
    }
}


let categoriaElegida = ''
let categoria = documento.getElementById("categoria")

categoria.addEventListener("change",()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    render(filtroActual)

}



catalogo.innerHTML = ""

for (const prod of filtroActual){
    let card = document.createElement("div")

    card.className = "card"

    card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p`

    prueba.append(card)
}

/*let boton = document.getElementById ("primerBoton")
boton.addEventListener("click",)
    
*/

/*let nombreDeCliente = prompt ("¡Hola! ¿Como te llamas?")



prueba.innerText = "Bienvenido" + nombreDeCliente
console.log(prueba.innerText) */