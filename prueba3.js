const listaDeProductos = [
    {
        id: 1,
        nombre: "Alfajor Negro",
        precio: 150,
        stock: 300
    },
    {
        id: 2,
        nombre: "Alfajor Blanco",
        precio: 150,
        stock: 300
    },
    {
        id: 3,
        nombre: "Alfajor Glaseado",
        precio: 140,
        stock: 243,
    },
    {
        id: 4,
        nombre: "Alfajor Frutal",
        precio: 120,
        stock: 34
    },
    {
        id: 5,
        nombre: "Alfajor con Almendras",
        precio: 180,
        stock: 44
    }
]

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let cart = []

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()


listaDeProductos.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    //Precio
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio}`
    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    //Button
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(event){
    cart.push(event.target.getAttribute('mark'))
    renderCart()
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
 let id = event.target.dataset.item
 cart = cart.filter((cartId) => {
    return cartId != id
 })
 renderCart()
 
}

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}




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