import React from 'react';
import '@styles/FormCliente.scss';
const FormClientes = () => {
    return (
        <div className='formCliente'>
            <div className='formContainer'>
                <form action='/' className='formularioCliente'>
                    <label className='label'>Nombre</label>
                    <input type='text' className='input'/>

                    <label className='label'>Email</label>
                    <input type='text' className='input'/>

                    <label className='label'>Celular</label>
                    <input type='tel' max='10' className='input' maxLength="10"/>

                    <input type='submit' className='botonPrincipal' value='Agregar cliente'/>

                </form>

            </div>
        </div>
    );
}

export default FormClientes;