/*let nombreIngresado = prompt ("ingrese su nombre:")
console.log(nombreIngresado)
alert("Hola")*/

/*
let productoA = {
    nombre: "alfajor blanco",
    precio: "150"
}
*/
function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
let productoA = new Producto("Alfajor Blanco",150, 100)
let productoB = new Producto("Alfajor Negro",150, 100)
let productoC = new Producto("Alfajor Frutal", 120, 0)

let listaProductos = [productoA, productoB, productoC]

listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

/*
for(const prod of listaProductos){
    if(prod.stock > 0){
        listaNombres.push(prod.nombre)
    }  
}
*/ 
/*
let productoA = "alfajor blanco"
let precioProductoA = "150"
*/
/*
let productoB = "alfajor negro"
let precioProductoB = "150"
*/

/*let productoB = {
    nombre: "alfajor negro",
    precio: "150"
}*/
let pedidoSinContactar ="200"

/*\n - Alfajor Negro \n - Alfajor Blanco  \n - Ninguno*/

function total(){
    alert("el precio total es" + " " + precioTotal*0.9)
}
function agradecimiento(){
    alert("¡Muchas gracias por su compra!")
}


let nombreDeCliente = prompt ("¡Hola! ¿Como te llamas?")
alert("¡Bienvenido/a" + " " + nombreDeCliente + "!")
let compra = prompt("¿Que producto desea comprar?: \n - " + listaNombres.join("\n -") + "\n - Ninguno")
let precioTotal = 0
while(compra !="Ninguno"){
    if (compra.toUpperCase() == "ALFAJOR BLANCO"){
        alert("Los alfajores Blancos tienen un costo de 150 c/u")
        alert("¡Con la compra minima de una docena hay un 10% de descuento!")
        let cantidadDeAlfajoresBlancos = prompt("¿Cuantos" + " " + productoA.nombre + " " + "quiere comprar?")

        if (cantidadDeAlfajoresBlancos >= 100){
            alert("Si desea comprar esta cantidad, ¡por favor contactarnos telefonicamente!")
        }
        else{

            let precioTotalA = productoA.precio * cantidadDeAlfajoresBlancos
            precioTotal = precioTotalA 

            

        if (precioTotal >= 1800){
            alert("¡Tenés envio gratis y 10% de descuento!")
            console.log("Hay envio gratis")
            total()
            agradecimiento()
        }else{
            alert("El costo de envio es" + " " + "de" + " " + precioTotal*0.10)
            console.log("no hay envio gratis")
            let precioConEnvio = precioTotal+precioTotal*0.10
            alert("El precio total es" + " " + precioConEnvio)
            agradecimiento()
        }
        }
           
        
        }else if(compra.toUpperCase() =="ALFAJOR NEGRO"){
            alert("Los alfajores Negros tienen un costo de 150 c/u")
        alert("¡Con la compra minima de una docena hay un 10% de descuento!")
            let cantidadDeAlfajoresNegros = prompt("¿Cuantos" + " " + productoB.nombre + " " + "quiere comprar?")

            if (cantidadDeAlfajoresNegros >= 100){
                alert("Si desea comprar esta cantidad, ¡por favor contactarnos telefonicamente!")
            }
            else{
            let precioTotalB = precioTotal + (productoB.precio * cantidadDeAlfajoresNegros)
            precioTotal = precioTotalB
            
        if (precioTotal >= 1800){
            alert("¡Tenés envio gratis y 10% de descuento!")
            console.log("Hay envio gratis")
            total()
            agradecimiento()
        }else{
            alert("El costo de envio es" + " " + "de" + " " + precioTotal*0.10)
            let precioConEnvio = precioTotal+precioTotal*0.10
            console.log("no hay envio gratis")
            alert("El precio total es" + " " + precioConEnvio)
            agradecimiento()
        }}
        
        } else{
         alert("No entendemos esa respuesta!")
        }
        compra = prompt("¿Que producto desea comprar?: \n - Alfajor Negro \n - Alfajor Blanco  \n - Ninguno") 
}




    





