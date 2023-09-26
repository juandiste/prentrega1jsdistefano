const tiendacontenedora = document.getElementById ("tiendacontenedora");
const mostrarcarrito = document.getElementById ("mostrarcarrito");
const carrcontainer = document.getElementById("carrcontainer");
const botonfinalizarcompra = document.getElementById("botonfinalizarcompra")



const productos = [
    {id:1,
    nombre: "s23",
    precio:1300,
    img:
    "img/s23ref.jpg",
    cantidad:1,
    },
    {id:2,
    nombre: "fold 4",
    precio:1500,
    img:
    "img/fold4.jpg",
    cantidad:1,
    },
    {id:3,
    nombre: "flip 4",
     precio:1200,
     img:
     "img/flip4.jpg",
     cantidad:1,
    }, 
    {id:4,
    nombre: "note20",
    precio:1300,
    img:
    "img/note20ultra.jpg",
    cantidad:1,
    },
    {id:5,
    nombre:"a14",
    precio:900,
    img:
    "img/a14.jpg",
    cantidad:1,
    },
    {id:6,
     nombre:"tab8",
     precio:1200,
     img:
     "img/tablet4 (1).jpg",
     cantidad:1, 
    },
    {id:7,
    nombre:"moto edge 30",
     precio:1400,
    img:
    "img/edge 30 (1).jpg",
    cantidad:1,
    },
    {id:8,
     nombre:"iphon 14*pro",
     precio:1500,
    img:
     "img/14promaxx.jpg",
     cantidad:1, 
    },

];

 let carrito = JSON.parse(localStorage.getItem("compra")) || [];

productos.forEach((element) => {
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML=`
    <img src="${element.img}">
    <h3>${element.nombre}</h3>
    <p class="price">${element.precio}  us$</p>
    `;
    tiendacontenedora.append (content);

    let comprar = document.createElement("button");
    comprar.innerText="comprar";
    comprar.className="comprar";
    content.append (comprar);

    comprar.addEventListener("click",() => {
       
       const igual = carrito.some((igualelement) => igualelement.id === element.id);
       if(igual === true){
        carrito.map((elementos) => {
            if(elementos.id === element.id){
                elementos.cantidad++;
            }
        });
       }else {
        carrito.push({
            id:element.id,
            img:element.img,
            nombre:element.nombre,
            precio:element.precio, 
            cantidad:element.cantidad,           
        });
    guardadolocal();
    }
        Toastify({
            text: "producto agregado al 🛒",
            duration: 3000,
            }).showToast();})
        });
        const guardadolocal = () => {
            localStorage.setItem("compra",JSON.stringify (carrito));    
        };           