const tiendacontenedora = document.getElementById ("tiendacontenedora");
const mostrarcarrito = document.getElementById ("mostrarcarrito");
const carrcontainer = document.getElementById("carrcontainer");
const productos = [
    {id:1,
    nombre: "s23",
    precio:1300,
    img:"img/s23ref.jpg"},
    {id:2,
    nombre: "fold 4",
     precio:1500 ,
     img:"img/fold4.jpg"},
    {id:3,
    nombre: "flip 4",
     precio:1200,
     img:"img/flip4.jpg"},   
    {id:4,
    nombre: "note20",
    precio:1300,
    img:"img/note20ultra.jpg"},
    {id:5,
    nombre:"a14",
    precio:900,
    img:"img/a14.jpg"},
    {id:6,
     nombre:"tab8",
     precio:1200,
     img:"img/tablet4 (1).jpg"   

    }
];
const carrito = [];
productos.forEach((element) => {
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML=`
    <img src="${element.img}">
    <h3>${element.nombre}</h3>
    <p class="price">${element.precio}</p>
    `;
    tiendacontenedora.append (content);

    let comprar = document.createElement("button");
    comprar.innerText="comprar";
    comprar.className="comprar";
    content.append (comprar);

    comprar.addEventListener("click",() => {
        carrito.push({
            id:element.id,
            img:element.img,
            nombre:element.nombre,
            precio:element.precio,            
        }) 
        Toastify({
            text: "producto agregado",
            duration: 3000,
            }).showToast();})
});
    mostrarcarrito.addEventListener("click", () => {

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
        `;
        carrcontainer.append(carritocont);}); 

        const total = carrito.reduce ((acc , el) => acc + el.precio ,0 );

        const totalcompra = document.createElement("div")
        totalcompra.className = "comprafinal"
        totalcompra.innerHTML=`total a pagar : ${total} $`;
       carrcontainer.append(totalcompra);});