class Carrito {

  constructor() {
    this.productos = [];
    this.total = 0;
  }

  agregar(auto) {
    this.productos.push(auto);
    this.total += auto.precio;
  }

  remover(index, precio) {
    this.productos.splice( index, 1 );
    this.total -= precio;
  }

  pagar() {
    this.productos = [];
    this.total = 0;
  }
}

module.exports = Carrito;
