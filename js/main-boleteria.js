/* Definimos las opciones que tiene para elegir de: cine, película, formato, idioma, día, hora, cantidad de entradas y forma de pago. */

const cines = [
    new Cine(1, "Belgrano"),
    new Cine(2, "Palermo"),
    new Cine(3, "Recoleta")
];

const peliculas = [
    new Pelicula(1, "El Padrino"),
    new Pelicula(2, "El Rey León"),
    new Pelicula(3, "Forrest Gump"),
    new Pelicula(4, "Jurassic Park"),
    new Pelicula(5, "La vida de bella"),
    new Pelicula(6, "Los siete pecados capitales"),
    new Pelicula(7, "Mi pobre angelito"),
    new Pelicula(8, "Quién quiere ser millonario?"),
    new Pelicula(9, "Rocky"),
    new Pelicula(10, "Volver al futuro")
];

const formatos = [
    new Formato(1, "2D"),
    new Formato(2, "3D"),
    new Formato(3, "4D")
];

const idiomas = [
    new Idioma(1, "Doblada"),
    new Idioma(2, "Subtitulada")
];

const dias = [
    new Dia(1, "SAB 24 de junio"),
    new Dia(2, "DOM 25 de junio"),
    new Dia(3, "LUN 26 de junio"),
    new Dia(4, "MAR 27 de junio"),
    new Dia(5, "MIE 28 de junio"),
    new Dia(6, "JUE 29 de junio"),
    new Dia(7, "VIE 30 de junio")
];

const horas = [
    new Hora(1, "18 hs."),
    new Hora(2, "20 hs."),
    new Hora(3, "22 hs.")
];

const entradas = [
    new Entrada(1, "1"),
    new Entrada(2, "2"),
    new Entrada(3, "3"),
    new Entrada(4, "4"),
    new Entrada(5, "5"),
    new Entrada(6, "6")
];

const pagos = [
    new Pago(1, "Santander 50% OFF"),
    new Pago(2, "General")
];



/* Cargamos las listas de cines, películas, formatos, idiomas, días, horarios, cantidad de entradas y formas de pago. */

let listaDeCines = document.getElementById("cines");
cines.forEach((unCine) => {
    let item = document.createElement("option");
    item.value = unCine.id.toString();
    item.innerText = unCine.nombre;
    listaDeCines.append(item);
});

let listaDePeliculas = document.getElementById("peliculas");
peliculas.forEach((unaPelicula) => {
    let item = document.createElement("option");
    item.value = unaPelicula.id.toString();
    item.innerText = unaPelicula.nombre;
    listaDePeliculas.append(item);
});

let listaDeFormatos = document.getElementById("formatos");
formatos.forEach((unFormato) => {
    let item = document.createElement("option");
    item.value = unFormato.id.toString();
    item.innerText = unFormato.nombre;
    listaDeFormatos.append(item);
});

let listaDeIdiomas = document.getElementById("idiomas");
idiomas.forEach((unIdioma) => {
    let item = document.createElement("option");
    item.value = unIdioma.id.toString();
    item.innerText = unIdioma.nombre;
    listaDeIdiomas.append(item);
});

let listaDeDias = document.getElementById("dias");
dias.forEach((unDia) => {
    let item = document.createElement("option");
    item.value = unDia.id.toString();
    item.innerText = unDia.nombre;
    listaDeDias.append(item);
});

let listaDeHoras = document.getElementById("horas");
horas.forEach((unaHora) => {
    let item = document.createElement("option");
    item.value = unaHora.id.toString();
    item.innerText = unaHora.nombre;
    listaDeHoras.append(item);
});

let listaDeEntradas = document.getElementById("entradas");
entradas.forEach((unaEntrada) => {
    let item = document.createElement("option");
    item.value = unaEntrada.id.toString();
    item.innerText = unaEntrada.nombre;
    listaDeEntradas.append(item);
});

let listaDePagos = document.getElementById("pagos");
pagos.forEach((unPago) => {
    let item = document.createElement("option");
    item.value = unPago.id.toString();
    item.innerText = unPago.nombre;
    listaDePagos.append(item);
});



/* Declaramos variables y funciones. */

let indice = 0;
let compras = [];
const formulario = document.getElementById("formulario");

function generarIndiceCompra() {
    indice++;
    return indice;
}

function buscarCine(idCine) {
    return cines.find((unCine) => unCine.id === idCine);
}

function buscarPelicula(idPelicula) {
    return peliculas.find((unaPelicula) => unaPelicula.id === idPelicula);
}

function buscarFormato(idFormato) {
    return formatos.find((unFormato) => unFormato.id === idFormato);
}

function buscarIdioma(idIdioma) {
    return idiomas.find((unIdioma) => unIdioma.id === idIdioma);
}

function buscarDia(idDia) {
    return dias.find((unDia) => unDia.id === idDia);
}

function buscarHora(idHora) {
    return horas.find((unaHora) => unaHora.id === idHora);
}

function buscarEntrada(idEntrada) {
    return entradas.find((unaEntrada) => unaEntrada.id === idEntrada);
}

function buscarPago(idPago) {
    return pagos.find((unPago) => unPago.id === idPago);
}

function tablaCompras() {
    let tablaBody = document.getElementById("compraTabla");
    tablaBody.innerHTML = "";
    compras.forEach((unaCompra) => {
        let registro = document.createElement("tr");
        registro.innerHTML = `<tr>
            <td scope="row">${unaCompra.id}</td>
            <td>${unaCompra.cine.toString()}</td>
            <td>${unaCompra.pelicula.toString()}</td>
            <td>${unaCompra.formato.toString()}</td>
            <td>${unaCompra.idioma.toString()}</td>
            <td>${unaCompra.dia.toString()}</td>
            <td>${unaCompra.hora.toString()}</td>
            <td>${unaCompra.entrada.toString()}</td>
            <td>${unaCompra.importe}</td>
        </tr>`;
        tablaBody.append(registro);
    });
}

function crearCompra() {
    const idCine = document.getElementById("cines").value;
    const idPelicula = document.getElementById("peliculas").value;
    const idFormato = document.getElementById("formatos").value;
    const idIdioma = document.getElementById("idiomas").value;
    const idDia = document.getElementById("dias").value;
    const idHora = document.getElementById("horas").value;
    const idEntrada = document.getElementById("entradas").value;
    const idPago = document.getElementById("pagos").value;

    let unCine = buscarCine(parseInt(idCine));
    if (!unCine) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unaPelicula = buscarPelicula(parseInt(idPelicula));
    if (!unaPelicula) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unFormato = buscarFormato(parseInt(idFormato));
    if (!unFormato) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unIdioma = buscarIdioma(parseInt(idIdioma));
    if (!unIdioma) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unDia = buscarDia(parseInt(idDia));
    if (!unDia) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unaHora = buscarHora(parseInt(idHora));
    if (!unaHora) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unaEntrada = buscarEntrada(parseInt(idEntrada));
    if (!unaEntrada) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let unPago = buscarPago(parseInt(idPago));
    if (!unPago) {
        mostrarMensajeError(["No se completó la selección"]);
        return false;
    }

    let importe;
    if (unPago.id == 1) {
        importe = parseInt(unaEntrada.nombre) * 1500 /2;
    } else {
        importe = parseInt(unaEntrada.nombre) * 1500;
    }

    const unaCompra = new Compra(
        generarIndiceCompra(),
        unCine.nombre,
        unaPelicula.nombre,
        unFormato.nombre,
        unIdioma.nombre,
        unDia.nombre,
        unaHora.nombre,
        unaEntrada.nombre,
        importe
    );
    
    compras.push(unaCompra);

    localStorage.setItem("misCompras", JSON.stringify(compras));

    tablaCompras();

    return true;
}

function limpiarCampos() {
    document.getElementById("cines").value = "";
    document.getElementById("peliculas").value = "";
    document.getElementById("formatos").value = "";
    document.getElementById("idiomas").value = "";
    document.getElementById("dias").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("entradas").value = "";
    document.getElementById("pagos").value = "";
}



/* Modificamos el valor del índice de la compra para que continue a las compras anteriores, recuperamos las compras realizadas anteriormente, generamos la nueva compra e informamos si se pudo realizar la operación o hubo algún error. */

if (localStorage.getItem("misCompras")) {
    let indiceRecuperado = localStorage.getItem("misCompras");
    let indiceConvertido = JSON.parse(indiceRecuperado);
    indice = indiceConvertido.length;
}

if (localStorage.getItem("misCompras")) {
    let misComprasRecuperadas = localStorage.getItem("misCompras");
    let misComprasConvertidas = JSON.parse(misComprasRecuperadas);
    compras = misComprasConvertidas.map(
        (unaCompra) => new Compra(unaCompra.id, unaCompra.cine, unaCompra.pelicula, unaCompra.formato, unaCompra.idioma, unaCompra.dia, unaCompra.hora, unaCompra.entrada, unaCompra.importe));
    tablaCompras(compras);
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    evento.target.setAttribute("class", "needs-validation");
    ocultarMensaje();

    let resultado = crearCompra();
    if (resultado) {
        mostrarMensajeCompra(["La compra se generó con éxito."]);
        limpiarCampos();
    }
    return resultado;
});



/* Declaración de funciones para los mensajes que se mostraran por pantalla. */

function mostrarMensaje(
    mensajes = [],
    type = "success",
    titulo = "¡Operación exitosa!") {
    
    let mensajeContenedor = document.getElementById("mensajes");
    let mensajeBody = document.createElement("div");
    mensajeBody.setAttribute("role", "alert");
    mensajeBody.setAttribute("class", `alert alert-${type}`);

    let tituloBody = document.createElement("h4");
    tituloBody.setAttribute("class", "alert-heading");
    tituloBody.innerText = titulo;
    mensajeBody.append(tituloBody);

    let divisor = document.createElement("hr");
    mensajeBody.append(divisor);

    mensajes.forEach((msjs) => {
        let mensajeItem = document.createElement("p");
        mensajeItem.setAttribute("class", "mb-0");
        mensajeItem.innerText = msjs;
        mensajeBody.append(mensajeItem);
    });

    mensajeContenedor.append(mensajeBody);
}

function ocultarMensaje() {
    let mensajeContenedor = document.getElementById("mensajes");
    mensajeContenedor.innerHTML = "";
}

function mostrarMensajeError(mensajes = []) {
    mostrarMensaje(mensajes, "danger", "¡Error!");
}

function mostrarMensajeCompra(mensajes = []) {
    mostrarMensaje(mensajes, "success");
}

