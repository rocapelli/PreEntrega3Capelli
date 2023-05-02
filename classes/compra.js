class Compra {
    constructor(id, unCine, unaPelicula, unFormato, unIdioma, unDia, unaHora, unaEntrada, importe) {
      this.id = id;
      this.cine = unCine;
      this.pelicula = unaPelicula;
      this.formato = unFormato;
      this.idioma = unIdioma;
      this.dia = unDia;
      this.hora = unaHora;
      this.entrada = unaEntrada;
      this.importe = importe;
    }


    toString() {
      return this.cine + " - " + this.pelicula + " - " + this.formato + " - " + this.idioma + " - " + this.dia + " - " + this.hora + " - " + this.entrada + " - " + this.importe
    }
}

