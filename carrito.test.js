const Carrito = require('./Carrito');
const autos = require('./data/autos');
let carritoCompras = new Carrito();

describe('Carrito Propiedades:', function() {
  test('La propiedad productos dentro del carritoCompras de compras deberia ser un array vacio', function() {
    expect( Array.isArray( carritoCompras.productos ) ).toEqual( true );
    expect( carritoCompras.productos.length ).toEqual( 0 );
  });
  
  test('La propiedad total deberia ser  0.', function() {
    expect( carritoCompras.total ).toEqual( 0 );
  });
});


describe('Carrito Metodos:', function() {
  afterEach(function() {
    // Como buena practica es bueno reiniciar los valores del objeto
    carritoCompras.productos = [];
    carritoCompras.total = 0;
  });

  test('agregar() deberia agregar productos autos al carrito de compras.', function() {
    carritoCompras.agregar( autos[0] );
    carritoCompras.agregar( autos[1] );

    expect( carritoCompras.productos.length ).toEqual( 2 );
    expect( carritoCompras.productos[0] ).toEqual( autos[0] );
    expect( carritoCompras.productos[1] ).toEqual( autos[1] );
  });

  test('agregar() deberia incrementar la propiedad total.', function() {
    carritoCompras.agregar( autos[0] );
    carritoCompras.agregar( autos[8] );
    carritoCompras.agregar( autos[2] );

    expect( carritoCompras.total ).toEqual( autos[0].precio + autos[8].precio + autos[2].precio );
  });
  
  test('remover() deberia remover productos autos del carrito de compras.', function() {
    // la function remover recibe la posicion en el array de productos que se desea remover
    // y el precio del producto
    carritoCompras.agregar( autos[0] );
    carritoCompras.agregar( autos[1] );
    carritoCompras.agregar( autos[2] );
  
    carritoCompras.remover( 1, autos[1].precio );
  
    expect( carritoCompras.productos.length ).toEqual( 2 );
    expect( carritoCompras.productos[0] ).toEqual( autos[0] );
    expect( carritoCompras.productos[1] ).toEqual( autos[2] );
  });

  test('remover() deberia decrementar la propiedad total.', function() {
    carritoCompras.agregar( autos[0] );
    carritoCompras.agregar( autos[8] );
    carritoCompras.agregar( autos[2] );

    carritoCompras.remover( 0, autos[0].precio );
    carritoCompras.remover( 1, autos[2].precio );

    expect( carritoCompras.total ).toEqual( autos[8].precio );
  });

  test('pagar() deberia dejar la lista de productos vacia y el total en 0.', function() {
    carritoCompras.agregar( autos[0] );
    carritoCompras.agregar( autos[1] );
    carritoCompras.agregar( autos[2] );
    carritoCompras.agregar( autos[3] );

    carritoCompras.pagar();

    expect( carritoCompras.productos.length ).toEqual( 0 );
    expect( carritoCompras.total ).toEqual( 0 );
  });
});
