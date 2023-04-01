import React, {useRef} from 'react';
import '@styles/FormCliente.scss';
import axios from 'axios';


const FormClientes = () => {
    
    const formulario = useRef(null)
   
    const handleSubmit=()=>{
        const formData=new FormData(formulario.current)
        const data={
            nombre:formData.get('nomCli'),
            apellidos:formData.get('apsCli'),
            telefono:formData.get('celCli'),
            email:formData.get('emCli')
        }

        console.log(data)

        axios({
                    method:'POST',
                    url:'http://srchicharron.com:8080/dancing-queen/clientes/addcliente',
                    data:JSON.stringify(data),
                    headers:{'Content-Type':'application/json'}
        }) .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        
                <form className='formularioCliente' onSubmit={handleSubmit} ref={formulario}>
                    <label className='label'>Nombre(s)</label>
                    <input type='text' className='input' name='nomCli'/>

                    <label className='label'>Apellidos</label>
                    <input type='text' className='input' name='apsCli'/>

                    <label className='label'>Email</label>
                    <input type='text' className='input' name='emCli'/>

                    <label className='label'>Celular</label>
                    <input type='tel' max='10' className='input' name='celCli' maxLength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890'/>

                    <input type='submit' className='botonPrincipal' value='Agregar cliente'/>
                </form>
                
    );
}

export default FormClientes;

