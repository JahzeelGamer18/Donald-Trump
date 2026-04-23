function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user && pass){
        localStorage.setItem("user", user);
        document.getElementById("login").classList.add("hidden");
        document.getElementById("store").classList.remove("hidden");
    } else {
        alert("Completa los datos");
    }
}

function comprar(producto, precio) {
    alert(`Comprando ${producto} por $${precio}`);

    // Aquí redirigimos a PayPal (simulación)
    window.open("https://www.paypal.com", "_blank");

    // Guardar compra local (simple)
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    compras.push({producto, precio});
    localStorage.setItem("compras", JSON.stringify(compras));

    console.log("Compra guardada:", producto, precio);
}
