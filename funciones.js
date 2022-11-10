
document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
      {
        id: 1,
        nombre: "ALFAJOR DE CHOCOLATE",
        imagen: "./img/alfajor.jpg",
        precio: 150,
      },
      {
        id: 2,
        nombre: "ALFAJOR BLANCO",
        imagen: "./img/alfajorblanco.jpg",
        precio: 150,
      },
      {
        id: 3,
        nombre: "ALFAJOR DE FRUTA",
        imagen: "./img/alfajorfruta.jpg",
        precio: 120,
  
      },
      {
        id: 4,
        nombre: "ALFAJOR DE NUEZ",
        imagen: "./img/alfajornuez.jpg",
        precio: 200,
  
  
      }
    ]
    let carrito = [];
  
    const moneda = '$';
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const items = document.querySelector('#items');
    const botonVaciar = document.querySelector('#boton-vaciar');
    const formDeCuotas = document.querySelector('#formDeCuotas')
    const formularioContainer = document.querySelector('#formularioContainer')
    const formularioConDatosDeEnvio = document.querySelector('#formularioConDatosDeEnvio')
    const botonCerrarModal = document.querySelector('#botonCerrarModal')
    const miLocalStorage = window.localStorage;
  
    
  
    function printProductos() {
      baseDeDatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${moneda}${info.precio}`;
       
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-success');
        miNodoBoton.textContent = 'AGREGAR';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        items.appendChild(miNodo);
      });
    }
  

    function anadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute('marcador'))
      actualizarCarrito();
      guardarCarritoEnLocalStorage();
      Toastify({
        text: "✔️Añadido al Carrito!",
        gravity: 'top',
        position: 'right',
        duration: 1000,
      }).showToast();
    }
  
    
    function actualizarCarrito() {
      DOMcarrito.textContent = '';
      const carritoSinDuplicados = [...new Set(carrito)];

      carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
      });
     
      DOMtotal.textContent = calcularTotal();
      let total = parseInt(calcularTotal())
      console.log(total)
      calculoDeCuotas(total)
      mostrarFormulario(total)
    }
  
  
    function borrarItemCarrito(evento) {
      const id = evento.target.dataset.item;
      carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
      });
      actualizarCarrito();
      guardarCarritoEnLocalStorage();
      Toastify({
        text: "❌Eliminado del Carrito!",
        gravity: 'top',
        position: 'right',
        duration: 1000,
        style: {
          background: "#ff605a",
        },
      }).showToast();
  
    }
  
  
    function calcularTotal() {
      return carrito.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
      }, 0).toFixed(2);
  
  
    }
  
    
    function vaciarCarrito() {
      carrito = [];
      actualizarCarrito();
      localStorage.clear();
      Toastify({
        text: "❌Carrito Eliminado!",
        gravity: 'top',
        position: 'right',
        duration: 1000,
        style: {
          background: "#ff605a",
        },
      }).showToast();
  
    }
 
    function guardarCarritoEnLocalStorage() {
      miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
 
    function cargarCarritoDeLocalStorage() {
      if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      }
    }
    function calculoDeCuotas(total) {
      let mostrarCuotas = document.getElementById("print")
      radioBotonesCuotas = document.getElementsByName("numeroCuotas");
      var radioBotonSetValor = ''
      for (var i = 0; i < radioBotonesCuotas.length; i++) {
        if (radioBotonesCuotas[i].checked == true) {
          radioBotonSetValor = radioBotonesCuotas[i].value;
        }
      }
      mostrarCuotas.innerHTML = (total / radioBotonSetValor).toFixed(2)
  
    }
    
    function mostrarFormulario(total) {
      if (total > 0) {
        formularioContainer.hidden = false
      }
      else { formularioContainer.hidden = true }
    }
  
    
    function finalizarCompra(e) {
      e.preventDefault();
      $('#cartelCompraexitosa').modal('show');
      
      botonCerrarModal.addEventListener('click', ()=> {
        carrito = [];
        actualizarCarrito();
        localStorage.clear();
        $('#cartelCompraexitosa').modal('hide');
        formularioConDatosDeEnvio.reset();}
    )}
  
      botonVaciar.addEventListener('click', vaciarCarrito);
      formDeCuotas.addEventListener('change', actualizarCarrito);
      formularioConDatosDeEnvio.addEventListener('submit', finalizarCompra)
    
    
      
      cargarCarritoDeLocalStorage();
      printProductos();
      actualizarCarrito();
  
  })