document.addEventListener("DOMContentLoaded", function () {
    const carritoBtn = document.getElementById("carritoBtn");
    const carritoModal = new bootstrap.Modal(document.getElementById("carritoModal"));
    const carritoContenido = document.getElementById("carritoContenido");
    const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
    const totalCarritoSpan = document.getElementById("totalCarrito");

    // carrito de compras
    const carrito = [];

    function actualizarCarrito() {
        carritoContenido.innerHTML = "";
        let total = 0;

        carrito.forEach((producto) => {
            const item = document.createElement("div");
            item.innerHTML = `${producto.nombre} - $${producto.precio}`;
            carritoContenido.appendChild(item);

            // Suma tus compras
            total += parseFloat(producto.precio);
        });

        //  total de tus compras
        totalCarritoSpan.textContent = total.toFixed(2);
    }

    function vaciarCarrito() {
        carrito.length = 0;
        actualizarCarrito();
    }

    carritoBtn.addEventListener("click", () => {
        actualizarCarrito();
        carritoModal.show();
    });

    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // lista para agregar 
    const agregarCarritoBtns = document.querySelectorAll(".agregar-carrito");
    agregarCarritoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nombre = btn.getAttribute("data-nombre");
            const precio = btn.getAttribute("data-precio");
            carrito.push({ nombre, precio });
        });
    });
});

