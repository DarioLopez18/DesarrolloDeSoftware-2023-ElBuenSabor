# Historia de Usuario #22
  
<p align="center">
    <img
    src="https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif"
    alt="fullstackdeveloper"
    width="300px"
    height="300px"
    align="center"
/>
</p>

## 

* Como: Cocinero / Administrador
* Quiero: Tener control de los productos a la venta
* Para: Poder registrar nuevos productos, modificar existentes o darlos de alta/baja

##

Criterios de aceptacion:

* El cocinero / administrador podrá acceder a una página en donde habrá una grilla con todos los productos, en donde se podrá ver el nombre del producto, su rubro, su tiempo de cocina, su precio de venta, si está dado de alta / baja y un botón para modificar dicho producto.
* En la grilla podrán aparecer otros datos de cada producto si se considera necesario o inclusive no mostrar alguno de los detallados en el ítem anterior.
*	En la página habrá un botón para poder crear un nuevo producto.
*	Al agregar un nuevo producto, se debe redirigir a un formulario para ingresar los datos del nuevo producto (nombre, descripción, receta, tiempo de cocina, rubro, imagen, precio de venta, sus ingredientes y si está dado de alta / baja), y al confirmar la operación mediante el botón correspondiente, debe redireccionar de nuevo a la grilla de productos.
*	Para elegir el rubro al cual pertenece el producto, se mostrarán mediante un combobox los rubros de productos y se podrá seleccionar un rubro que esté dado de alta (si un rubro está dado de baja, se podrá mostrar pero no seleccionar).
*	Para agregar un ingrediente al producto, se mostrarán los ingredientes mediante un combobox, y se podrá elegir un ingrediente que esté dado de alta (si un ingrediente está dado de baja, se podrá mostrar pero no seleccionar).
*	Al seleccionar un ingrediente, se mostrará su unidad de medida como referencia y se podrá ingresar la cantidad de dicho ingrediente.
*	Al ir ingresando ingredientes, se tendrá que mostrar el costo total del producto (suma de cantidad * precio de costo de cada ingrediente), el cual se actualizará automáticamente con cada cambio de ingredientes que haya. Este servirá como referencia a la hora de poner el precio de venta.
*	Si no se agrega como mínimo un ingrediente, no se podrá dar de alta el producto (el botón tendrá que estar deshabilitado o se tendrá que informar de la situación al cocinero / administrador).
*	En el formulario anterior debe existir un botón para cancelar el ingreso de un nuevo producto, el cual nos redireccionará de nuevo a la grilla de ingredientes.
*	El formulario de edición de un producto debe tener las mismas opciones que el de agregar un nuevo producto.

![image](https://github.com/DarioLopez18/DesarrolloDeSoftware-2023-ElBuenSabor/blob/HU22COC/hu22COC.png)
![image](https://github.com/DarioLopez18/DesarrolloDeSoftware-2023-ElBuenSabor/blob/HU22COC/HU22.1COC.png)
![image](https://github.com/DarioLopez18/DesarrolloDeSoftware-2023-ElBuenSabor/blob/HU22COC/HU22.2COC.png)
