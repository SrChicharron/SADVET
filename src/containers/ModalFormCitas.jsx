import React, { useEffect, useState } from "react";
import axios from "axios";
import useClientes from "@hooks/useClientes";
import useCitas from "@hooks/useCitas";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/ModalFormCitas.scss";

const ModalFormCitas = ({ cita, setCita, show, handleClose }) => {
  const url =
    "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";

  const clientes = useClientes.useGetClientes(url);

  // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
  const handleChange = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
    console.log(cita);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hacer una validación si cita.idCita es vacio crear una cita, si no es vacio editar una cita
    if (cita.idCita === "" || cita.idCita === undefined) {
      // console.log("Es una nueva cita -> " + cita.idCita);
      crearCita();
    } else {
      // console.log("Se tiene que editar esta cita -> " + cita.idCita);
      editarCita();
    }
  };

  // Funciones para crear una cita
  const crearCita = () => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/addcita";
    const citas = cita;
    const cita = useCitas.useAddCita(url, citas);
    console.log(cita);
    formatearFormulario();
  };

  // Funciones para editar una cita
  const editarCita = () => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/editcita";
    const citas = cita;
    const cita = useCitas.useEditCita(url, citas);
    console.log(cita);
    formatearFormulario();
  };

  // FUNCION PARA ELIMINAR UNA CITA
  const eliminarCita = (idCita) => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/deletecita";
    const citas = cita;
    const cita = useCitas.useDeleteCita(url, citas);
    console.log(cita);
    formatearFormulario();
  };

  //Funcion para formatear el formulario
  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setCita({
      idCita: "",
      idCliente: "",
      nombreCliente: "",
      apellidosCliente: "",
      idMascota: "",
      nombreMascota: "",
      fechaHora: "",
      descripcion: "",
    });
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="modal__citas"
    >
      <Modal.Header className="modal__header" closeButton onClick={formatearFormulario}>
        <Modal.Title>AÑADIR CITA</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <form className="form__citas" onSubmit={handleSubmit}>
          <div className="container__inputs">
            <label htmlFor="idCliente" className="label__citas labels">
              Cliente
            </label>
            <select
              name="idCliente"
              className="input__citas inputs"
              onChange={handleChange}
            >
              <option value={cita.idCliente}>
                {cita.nombreCliente + " " + cita.apellidosCliente}
              </option>
              {clientes.map((cliente, indice) => (
                <option key={indice} value={cliente.id}>
                  {cliente.nombre + " " + cliente.apellidos}
                </option>
              ))}
            </select>
          </div>
          {/* SELECT CON EL LISTADO DE MASCOTAS */}
          <div className="container__inputs">
            <label htmlFor="idMascota" className="label__citas labels">
              Mascota
            </label>
            <select
              name="idMascota"
              className="input__citas inputs"
              onChange={handleChange}
            >
              <option value={cita.idMascota}>{cita.nombreMascota}</option>
              <option value="2">Mascota 2</option>
              <option value="3">Mascota 3</option>
            </select>
          </div>
          {/* INPUT DE FECHA Y HORA DE LA CITA */}
          <div className="container__inputs">
            <label htmlFor="fechaHora" className="label__citas labels">
              Fecha y hora
            </label>
            <input
              name="fechaHora"
              className="input__citas inputs"
              type="datetime-local"
              onChange={handleChange}
              value={cita.fechaHora}
            />
          </div>
          {/* DESCRIPCIÓN DE LA CITA */}
          <div className="container__inputs">
            <label htmlFor="descripcion" className="label__citas labels">
              Descripción
            </label>
            <textarea
              className="input__citas inputs"
              type="text"
              placeholder="Descripción"
              name="descripcion"
              onChange={handleChange}
              value={cita.descripcion}
            />
          </div>
          {/* BOTÓN PARA GUARDAR LA CITA */}
          <div className="container__inputs-modal">
            <p onClick={() => {handleClose(); formatearFormulario()}} className="btn__cancel">
              Cancelar
            </p>
            <button
              type="submit"
              onClick={() => {handleClose(); formatearFormulario()}}
              className="button__citas-modal"
            >
              AGREGAR
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFormCitas;
