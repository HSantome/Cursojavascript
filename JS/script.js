/*let nombreIngresado = prompt ("ingrese su nombre:")
console.log(nombreIngresado)
alert("Hola")*/

let productoA = "alfajor blanco"
let precioProductoA = "150"


let productoB = "alfajor negro"
let precioProductoB = "150"

let pedidoSinContactar ="200"



function total(){
    alert("el precio total es" + " " + precioTotal*0.9)
}
function agradecimiento(){
    alert("¡Muchas gracias por su compra!")
}


let nombreDeCliente = prompt ("¡Hola! ¿Como te llamas?")
alert("¡Bienvenido/a" + " " + nombreDeCliente + "!")
let compra = prompt("¿Que producto desea comprar?: \n - Alfajor Negro \n - Alfajor Blanco  \n - Ninguno")
let precioTotal = 0
while(compra !="Ninguno"){
    if (compra == "Alfajor Blanco"){
        alert("Los alfajores Blancos tienen un costo de 150 c/u")
        alert("¡Con la compra minima de una docena hay un 10% de descuento!")
        let cantidadDeAlfajoresBlancos = prompt("¿Cuantos" + " " + productoA + " " + "quiere comprar?")

        if (cantidadDeAlfajoresBlancos >= 100){
            alert("Si desea comprar esta cantidad, ¡por favor contactarnos telefonicamente!")
        }
        else{

            let precioTotalA = precioProductoA * cantidadDeAlfajoresBlancos
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
           
        
        }else if(compra=="Alfajor Negro"){
            alert("Los alfajores Negros tienen un costo de 150 c/u")
        alert("¡Con la compra minima de una docena hay un 10% de descuento!")
            let cantidadDeAlfajoresNegros = prompt("¿Cuantos" + " " + productoB + " " + "quiere comprar?")

            if (cantidadDeAlfajoresNegros >= 100){
                alert("Si desea comprar esta cantidad, ¡por favor contactarnos telefonicamente!")
            }
            else{
            let precioTotalB = precioTotal + (precioProductoB * cantidadDeAlfajoresNegros)
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




    
    





