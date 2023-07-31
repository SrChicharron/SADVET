import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const ModalFormHistorial = ({show,handleClose}) => {
    return (
        <Modal keyboard={false} className='modalFormCliente' show={show} onHide={handleClose}>
                    <Modal.Header className='modalHeader'>
                        <Button variant="secondary" onClick={handleClose} className='buttonAbrirModal'>
                           X
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                    <form className='formularioCliente'>
                    <label className='label'>Mascota</label>
                    <select
                        name="idCliente"
                        className="input__citas inputs"
                        
                    >
                    <option>
                    mascota
                    </option> 
            
                    </select>

                    <label className='label'>Fecha</label>
                    <input
                        name="fecha"
                        className="input__citas inputs"
                        type="datetime-local"
            
                    />

                    <label className='label'>Descripcion de la enfermedad</label>
                    <input type='text' className='input' name='descripcion'/>

                    <div className="container__inputs-modal">
                        <p onClick={handleClose} className="btn__cancel">
                        Cancelar
                        </p>
                        <button
                        type="submit"
                        onClick={handleClose}
                        className="button__citas-modal"
                        >
                        AGREGAR
                        </button>
                    </div>
                    </form>
                    </Modal.Body>
        </Modal>
    );
}

export default ModalFormHistorial;