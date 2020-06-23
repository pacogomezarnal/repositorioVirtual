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

    //Mostrar datos cesta
    let mostrarCesta = function (cesta) {
        let codigo = document.getElementById('codigo');
        codigo.textContent=cesta.cesta["codigo"];
        let fecha = document.getElementById('fecha');
        fecha.textContent=cesta.cesta["fecha"];
        let precio=0;

        //Calculamos el total
        cesta.cesta["detalles"].forEach(producto => {
            precio=precio+producto["precio"];
        });
        let total = document.getElementById('total');
        total.textContent=precio;
    }

    var cesta;

    botonCheck.addEventListener('click', (event) => {
        cesta = JSON.parse(data);
        cesta.cesta["detalles"].forEach(producto => {agregarFila(producto)});
        mostrarCesta(cesta);
        console.log(cesta);

    });

    //Ordenar Productos
    let ordenarProductos = function (productos) {
        //Copiado de la documentacion de sort de mozilla a ver si sale asi
        var items = productos;
          items.sort(function (a, b) {
            if (a.precio > b.precio) {
              return 1;
            }
            if (a.precio < b.precio) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        //Sale al reves bufff
        console.log(items);
        agregarFila(items[2]);
        agregarFila(items[1]);
        agregarFila(items[0]);
        
    }

    botonOrdenar.addEventListener('click', (event) => {
        //Vaciamos
        let tabla = document.getElementsByTagName('table')[0];
        let cuerpo = document.getElementsByTagName('tbody')[0];
        cuerpo.remove();
        let cuerpoNuevo = document.createElement('tbody');
        tabla.appendChild(cuerpoNuevo);
        ordenarProductos(cesta.cesta["detalles"]);
    });   

 

});