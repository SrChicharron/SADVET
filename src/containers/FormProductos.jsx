import React, {useRef} from 'react';
import '@styles/FormCliente.scss';
import axios from 'axios';


const FormProductos = ({client, setClient, handleSubmit, handleChange,formCliente }) => {

    const validateAlphanumeric = (text) => {
        // Expresión regular para comprobar que solo contiene caracteres alfanuméricos
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        return alphanumericRegex.test(text);
      };

    const handle2ndChange = (event) => {
        setClient({ ...client, [event.target.name]: event.target.value });
      };
    
    return (
        
                <form className='formularioCliente' onSubmit={handleSubmit} ref={formCliente}>
                    <label className='label'>Nombre</label>
                    <input type='text' className='input' name='nombre' value={client.nombre} onChange={handleChange} required/>

                    <label className='label'>Descripcion</label>
                    <input type='text' className='input' name='descripcion' value={client.descripcion} onChange={handleChange} required/>

                    <label className='label'>Precio</label>
                    <input type="number" className='input' name='precio' value={client.precio} onChange={handleChange} required
                    onKeyPress={(e) => {
                        if (!validateAlphanumeric(e.key)) e.preventDefault();
                      }}
                    />

                    <input type='submit' className='botonPrincipal' value='Agregar Producto'/>
                </form>
                
    );
}

export default FormProductos;