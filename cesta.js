document.addEventListener('DOMContentLoaded', () => {

    let agregarFila = function (producto) {
        console.log(producto);
        /*
        let cuerpo = document.getElementsByTagName('tbody')[0];

        //Crear una fila nueva en la tabla en la que pondremos 5 celdas
        let nuevaFila = document.createElement('tr');
        cuerpo.appendChild(nuevaFila);
        //Una celda con el id de la compra
        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = alimento;*/
    }

    botonCheck.addEventListener('click', (event) => {
        var cesta = JSON.parse(data);
        cesta.cesta["detalles"].forEach(producto => {agregarFila(producto)});
        console.log(cesta);

    });


});