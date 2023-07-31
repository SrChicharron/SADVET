import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/ModalFormCitas.scss";

const ModalFormRecetas = ({show2,handleClose2,receta,setReceta,handleSubmitReceta,handleChange,formatearFormulario,formReceta}) => {

  const handle2ndChange = (event) => {
    setReceta({ ...receta, [event.target.name]: event.target.value });
  };


    return (
        <Modal
      show={show2}
      onHide={handleClose2}
      backdrop="static"
      keyboard={false}
      className="modal__citas"
    >
      <Modal.Header className="modal__header" closeButton>
        <Modal.Title>RECETA</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        
        <form onSubmit={handleSubmitReceta} ref={formReceta}>
        <div className="container__inputs">
          <label htmlFor="fechaReceta" className="label__citas labels">
            Fecha y hora
          </label>
          <input
            name="fechaReceta"
            className="input__citas inputs"
            type="datetime-local"
            required
            value={receta.fecha} onChange={handleChange}
          />
        </div>

            <div className="container__inputs">
            <label htmlFor="nombrevetReceta" className=" labels">
                Atendió
            </label>
            <input
                name="nombrevetReceta"
                className=" inputs"
                type="text"
                required
                value={receta.nombreVet} onChange={handleChange}
            />
            </div>

            <div className="container__inputs">
            <label htmlFor="idMascotaReceta" className=" labels">
                Mascota
            </label>
            <select
            name="idMascotaReceta"
            className="input__citas inputs"
            
            >
            <option>mascota</option>
            {/* {mascotas.map((mascota, indice) => (
              <option key={indice} value={mascota.id}>
                {mascota.nombre}
              </option>
            ))} */}
            </select>
            </div>

            <div className="container__inputs">
            <label htmlFor="idProdReceta" className=" labels">
                Productos/Servicios
            </label>
            <select
            name="idProdReceta"
            className="input__citas inputs"
            
            >
            <option>producto</option>
            {/* {mascotas.map((mascota, indice) => (
              <option key={indice} value={mascota.id}>
                {mascota.nombre}
              </option>
            ))} */}
            </select>
            </div>

            <div className="container__inputs">
            <label htmlFor="cantidadProdsReceta" className=" labels">
                Cantidad de productos
            </label>
            <input
                name="cantidadProdsReceta"
                className=" inputs"
                type="text"
                required
                value={receta.cantidad} onChange={handleChange}
            />
            </div>

            <div className="container__inputs">
            <label htmlFor="precioProdsReceta" className=" labels">
                Precio del producto
            </label>
            <input
                name="precioProdsReceta"
                className=" inputs"
                type="text"
                required
                value={receta.precio} onChange={handleChange}
            />
            </div>

            <div className="container__inputs">
            <label htmlFor="totalReceta" className=" labels">
                Total
            </label>
            <input
                name="totalReceta"
                className=" inputs"
                type="text"
                required
                value={receta.total} onChange={handleChange}
            />
            </div>

            <div className="container__inputs-modal">
            <p onClick={handleClose2} className="btn__cancel">
              Cancelar
            </p>
            <button
              type="submit"
              onClick={handleClose2}
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

export default ModalFormRecetas;