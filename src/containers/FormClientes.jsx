import React, {useRef} from 'react';
import '@styles/FormCliente.scss';
import axios from 'axios';


const FormClientes = ({client, setClient, handleSubmit, handleChange,formCliente }) => {

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
                    <label className='label'>Nombre(s)</label>
                    <input type='text' className='input' name='nombre' value={client.nombre} onChange={handleChange} required/>

                    <label className='label'>Apellidos</label>
                    <input type='text' className='input' name='apellidos' value={client.apellidos} onChange={handleChange} required/>

                    <label className='label'>Email</label>
                    <input type='text' className='input' name='email' value={client.email} onChange={handleChange} pattern=".+@.+\..+" placeholder='user@mail.com' required/>

                    <label className='label'>Celular</label>
                    <input type='number' max='10' className='input' name='telefono' value={client.telefono} onChange={handleChange} minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='4400112233' required
                    onKeyPress={(e) => {
                        if (!validateAlphanumeric(e.key)) e.preventDefault();
                      }}
                    />

                    <input type='submit' className='botonPrincipal' value='Agregar cliente'/>
                </form>
                
    );
}

export default FormClientes;