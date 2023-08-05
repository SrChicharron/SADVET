import React, {useRef} from 'react';
import '@styles/FormCliente.scss';
import axios from 'axios';
import useCatalogos from "@hooks/useCatalogos";


const FormProductos = ({client, setClient, handleSubmit, handleChange,formCliente }) => {

    const urlProducto = "http://srchicharron.com:2813/sadvet/producto/getProductos";
    const productos = useCatalogos.useGetCatalogo(urlProducto);
    
    return (
        
                <form className='formularioCliente' onSubmit={handleSubmit} ref={formCliente}>
                    <div className="container__inputs">
          <label htmlFor="idProducto" className="label__citas labels">
            Producto
          </label>
          <select
            name="idProducto"
            className="input__citas inputs"
            onChange={handleChange}
            required
          >
            <option value={0}>
            
            </option> 
            {productos.map((producto, indice) => (
              <option key={indice} value={producto.id} selected={client.idProducto === producto.id}>
                {producto.nombre}
              </option>
            ))}
          </select>
        </div>

                    <label className='label'>Cantidad</label>
                    <input type="number" className='input' name='cantidad' value={client.cantidad} onChange={handleChange} required/>

                    <input type='submit' className='botonPrincipal' value='Agregar Receta'/>
                </form>
                
    );
}

export default FormProductos;