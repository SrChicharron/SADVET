import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/ModalFormCitas.scss";


const ModalFormProductos = ({show,handleClose, handleChange, product, setProduct, handleSubmit, formProducto}) => {

   // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
   const handle2ndChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };


    return (
        <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="modal__citas"
    >
      <Modal.Header className="modal__header" closeButton>
        <Modal.Title>PRODUCTO/SERVICIO</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        
        <form onSubmit={handleSubmit} ref={formProducto}>
            <div className="container__inputs">
            <label htmlFor="nombreProducto" className=" labels">
                Nombre
            </label>
            <input
                name="nombreProducto"
                className=" inputs"
                type="text"
                required
                value={product.nombre} onChange={handleChange}
            />
            </div>

            <div className="container__inputs">
            <label htmlFor="descripcionProducto" className=" labels">
                Descripcion
            </label>
            <input
                name="descripcionProducto"
                className=" inputs"
                type="text"
                required
                value={product.descripcion} onChange={handleChange}
            />
            </div>

            <div className="container__inputs">
            <label htmlFor="precioProducto" className=" labels">
                Precio
            </label>
            <input
                name="precioProducto"
                className=" inputs"
                type="text"
                required
                value={product.precio} onChange={handleChange}
            />
            </div>

            <div className="container__inputs-modal">
            <p onClick={handleClose} className="btn__cancel">
              Cancelar
            </p>
            <button
              type="submit"
              onClick={handleClose}
              className="button__citas-modal"
            >
              GUARDAR
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    );
}

export default ModalFormProductos;