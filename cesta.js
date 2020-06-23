document.addEventListener('DOMContentLoaded', () => {

    let agregarFila = function (producto) {
        console.log(producto);
        let cuerpo = document.getElementsByTagName('tbody')[0];

        //Crear una fila nueva en la tabla en la que pondremos 5 celdas
        let nuevaFila = document.createElement('tr');
        cuerpo.appendChild(nuevaFila);
        //Una celda por cada elemento
        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto["id"];
        nuevaFila.appendChild(celdaNombre);
        celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto["concepto"];
        nuevaFila.appendChild(celdaNombre);
        celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto["marca"];
        nuevaFila.appendChild(celdaNombre);
        celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto["cantidad"];
        nuevaFila.appendChild(celdaNombre);
        celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto["precio"];
        nuevaFila.appendChild(celdaNombre);
    }

    botonCheck.addEventListener('click', (event) => {
        var cesta = JSON.parse(data);
        cesta.cesta["detalles"].forEach(producto => {agregarFila(producto)});
        console.log(cesta);

    });


});