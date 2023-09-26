const verCarrito = () => {

    carrcontainer.innerHTML="";
    carrcontainer.style.display="flex";
    const carrheader = document.createElement("div");
    carrheader.className= "carr-header"
    carrheader.innerHTML=`
    <h1 class="carr-heder-title">carrito.</h1>
    `;
    carrcontainer.append (carrheader)

    const carrboton = document.createElement("h1");
    carrboton.innerText = "x";
    carrboton.className = "carr-header-button";

     carrboton.addEventListener("click", () => {
    carrcontainer.style.display = "none";})
    carrheader.append (carrboton);

        carrito.forEach((element) => {
        let carritocont = document.createElement("div");
        carritocont.className="carr-content"
        carritocont.innerHTML=`
        <img src="${element.img}">
        <h3>${element.nombre}</h3>
        <p class="valor">${element.precio} $</p>
        <button class="restar"> ➖ </button>
        <p>cantidad:${element.cantidad}</p>
        <button class="sumar"> ➕ </button>
        <p>total:${element.cantidad * element.precio}</p>
        <span class="deleteproduct"> ✖ </span>
        ` ;

       carrcontainer.append(carritocont);


       let restar = carritocont.querySelector(".restar")

       restar.addEventListener("click" , () =>{
        if(element.cantidad !== 1)
        element.cantidad -- ;
        guardadolocal();
        verCarrito();
      });

        let sumar = carritocont.querySelector(".sumar")  
         sumar.addEventListener("click" , () =>{
        element.cantidad ++ ;
        guardadolocal();
        verCarrito();

       });

       let eliminar = carritocont.querySelector(".deleteproduct");

       eliminar.addEventListener("click", ()=> { 
        eliminarprod(element.id);
       });
  }); 

        const total = carrito.reduce ((acc , el) => acc + el.precio * el.cantidad ,0 );

        let totalcompra = document.createElement("div")
        totalcompra.className = "comprafinal"
        totalcompra.innerHTML=`total a pagar : ${total} $`;


        carrcontainer.append(totalcompra);
 };

  mostrarcarrito.addEventListener("click" , verCarrito)

    const eliminarprod = (id) => {

      const buscarId = carrito.find((element) => element.id === id);

      carrito = carrito.filter ((carritoId) => {
        return carritoId !== buscarId;
      })
      verCarrito();
      guardadolocal();
    };

    function finalizarcompra () {

      Toastify({
        text: "carrito vacio 🗑",
        duration: 3000,
        }).showToast();

      if (carrito=[]);

      guardadolocal();
    };

      botonfinalizarcompra.addEventListener("click",finalizarcompra)









  