import React,{useState,useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const ModalFormCliente = ({show, handleClose, handleChange, cliente}) => {

    const textoBoton="Guardar";
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        <Modal keyboard={false} className='modalFormCliente' show={show} onHide={handleClose}>
                    <Modal.Header className='modalHeader'>
                        <Button variant="secondary" onClick={handleClose} className='buttonAbrirModal'>
                           X
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                    <form className='formularioCliente' ref={formulario}>
                    <label className='label'>Nombre(s)</label>
                    <input type='text' className='input' name='nomCli' value={cliente.nombre}/>

                    <label className='label'>Apellidos</label>
                    <input type='text' className='input' name='apsCli' value={cliente.apellidos}/>

                    <label className='label'>Email</label>
                    <input type='text' className='input' name='emCli' value={cliente.email}/>

                    <label className='label'>Celular</label>
                    <input type='tel' max='10' className='input' name='celCli' value={cliente.telefono} maxLength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890'/>

                    </form>
                    </Modal.Body>

                    <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleClose} className='botonCancelar'>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} className='botonAgregar'>
                        Guardar
                    </Button>
                    </Modal.Footer>
                </Modal>
    );
}

export default ModalFormCliente;