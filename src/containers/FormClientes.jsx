<<<<<<< HEAD
import React, {useState} from 'react';
import '@styles/FormCliente.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormClientes = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='formCliente'>
            <div className='formContainer'>
                <form action='/' className='formularioCliente'>
                    <label className='label'>Nombre</label>
                    <input type='text' className='input'/>

                    <label className='label'>Email</label>
                    <input type='text' className='input'/>

                    <label className='label'>Celular</label>
                    <input type='tel' max='10' className='input' maxLength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890'/>

                    <input type='submit' className='botonPrincipal' value='Agregar cliente'/>
                </form>
            </div>

            {/* {<Button variant="primary" onClick={handleShow}>
                Abrir modal
            </Button>} */}

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className='modalFormCliente'>
                    <Modal.Header className='modalHeader'>
                        <Button variant="secondary" onClick={handleClose} className='buttonAbrirModal'>
                           X
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                    <form action='/' className='formularioCliente'>
                    <label className='label'>Nombre</label>
                    <input type='text' className='input'/>

                    <label className='label'>Email</label>
                    <input type='text' className='input'/>

                    <label className='label'>Celular</label>
                    <input type='tel' max='10' className='input' maxLength="10"/>

                    </form>
                    </Modal.Body>

                    <Modal.Footer className='modalFooter'>
                    <Button variant="secondary" onClick={handleClose} className='botonCancelar'>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} className='botonAgregar'>
                        Agregar
                    </Button>
                    </Modal.Footer>
                </Modal>
            
        </div>
                
    );
}

export default FormClientes;
=======
import React from 'react'

const FormClientes = () => {
  return (
    <div>FormClientes</div>
  )
}

export default FormClientes
>>>>>>> carlos
