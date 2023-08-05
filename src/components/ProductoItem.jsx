import React, {useState} from 'react';
import '@styles/ProductoItem.scss'
const ProductoItem = ({idProducto,producto,productoEdit,setProductoEdit,onDelete}) => {

    const [productoEditItem, setProductoEditItem] = useState({
         idProducto: producto.id,
         nombre: producto.nombre,
         descripcion: producto.descripcion,
         precio: producto.precio,
       });

    const clicEdit= ()=>{
        setProductoEdit(productoEditItem);
    }  

    const clicDelete = ()=>{
        console.log("eliminando"+productoEditItem.idProducto)
        deleteProducto();
    }

    const deleteProducto = () => {
    
        console.log("onDelete");
          console.log("Es una nueva cita -> ");
          console.log(productoEditItem);
    
          //const urlDelete= "http://srchicharron.com:8080/sadvet/productos/deleteproducto";
          //const urlAdd = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/mascotas/deletemascota";
          const newProducto = {
            id: productoEditItem.idProducto,
          };
          console.log("Datos del newProducto");
          console.log(newProducto);
          axios({
            method: "POST",
            url: urlDelete,
            data: JSON.stringify(newProducto),
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
              "Content-Type": "application/json",
            },
            mode: "no-cors",
          })
            .then((response) => {
              console.log(response);
              onDelete();
            })
            .catch((error) => {
              console.error(error);
            });
        
      };



    return (
       <div className="product-item">
            

            <h3 className="product-name">{producto.nombre}</h3>
            <p className="product-description">{producto.descripcion}</p>
            <p className="product-price">${producto.precio}</p>
            
            <div className="product-actions">
                <button className="edit-button" onClick={clicEdit}>Editar</button>
                <button className="delete-button" onClick={clicDelete}>Borrar</button>
            </div>
        </div>

    );
}

export default ProductoItem;