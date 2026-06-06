const modal = document.getElementById("modal");
const form = document.getElementById("form");
const btnNuevo = document.getElementById("btnNuevo");
const btncerrar = document.getElementById("cerrar"); 

btnNuevo.addEventListener("click", function(){
    form.reset(); 
    modal.classList.add("show"); 
    console.log("Modal abierto"); 
});

btncerrar.addEventListener("click", function(){
    modal.classList.remove("show"); 
    console.log("Modal cerrado");
});

const nombre = document.getElementById("nombre"); 
const descripcion = document.getElementById("descripcion"); 
const imagen = document.getElementById("imagen"); 
const contenedorTarjetas = document.getElementById("contenedorTarjetas"); 

let tarjetasGuardadas = JSON.parse(localStorage.getItem("misTarjetas")) || [];

function guardar() {
    localStorage.setItem("misTarjetas", JSON.stringify(tarjetasGuardadas));
}

function renderizarTarjetas() {
    contenedorTarjetas.innerHTML = "";
    
    tarjetasGuardadas.forEach((tarjetaData) => {
        const tarjeta = document.createElement("article"); 
        tarjeta.classList.add("card"); 

        tarjeta.innerHTML = `
            <img src="${tarjetaData.imagen}" alt="" class="img-personalizada">
            <h2>${tarjetaData.nombre}</h2>
            <p>${tarjetaData.descripcion}</p>
        `;

        contenedorTarjetas.appendChild(tarjeta); 
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
   
    const imagenn = imagen.value.trim();
    const nombree = nombre.value.trim();
    const descripcionn = descripcion.value.trim();


    const nuevaTarjeta = {
        imagen: imagenn,
        nombre: nombree,
        descripcion: descripcionn
    };

    tarjetasGuardadas.push(nuevaTarjeta);

    guardar();
    renderizarTarjetas();

    form.reset(); 
    modal.classList.remove("show"); 
    console.log(tarjetasGuardadas)
    
});
const btnLimpiar = document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", () => {
    tarjetasGuardadas = [];
    guardar();
    renderizarTarjetas();
});
renderizarTarjetas();



