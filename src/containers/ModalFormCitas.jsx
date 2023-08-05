import React, { useEffect, useState } from "react";
import axios from "axios";
import useClientes from "@hooks/useClientes";
import useCitas from "@hooks/useCitas";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/ModalFormCitas.scss";

const ModalFormCitas = ({cita,setCita,show,handleClose,handleSubmit,handleChange,formatearFormulario,formCita}) => {
  const [mascotas, setMascotas] = useState([]);
  const [idCliente, setIdCliente] = useState(0);
  const url =
    "http://srchicharron.com:2813/sadvet/clientes/getallclientes";
  const urlMascotas =
    "http://srchicharron.com:2813/sadvet/mascotas/getmascotasbyclienteid?idCliente=";
  const clientes = useClientes.useGetClientes(url);

  const fetchMascotas = async () => {
    const req = await axios.get(urlMascotas + idCliente);
    setMascotas(req.data);
  };

  const handleChange2nd = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
    setIdCliente(event.target.selectedIndex);
  };

  useEffect(() => {
    fetchMascotas();
  }, [idCliente]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="modal__citas"
      ref={formCita}
    >
      <Modal.Header
        className="modal__header"
        closeButton
        onClick={formatearFormulario}
      >
        <Modal.Title>AÑADIR CITA</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <form className="form__citas" onSubmit={handleSubmit} ref={formCita}>
          <div className="container__inputs">
            <label htmlFor="idCliente" className="label__citas labels">
              Cliente
            </label>
            <select
              name="idCliente"
              className="input__citas inputs"
              onChange={handleChange2nd}
              required
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
              required
            >
              <option value={cita.idMascota}>{cita.nombreMascota}</option>
              {mascotas.map((mascota, indice) => (
                <option key={indice} value={mascota.id}>
                  {mascota.nombre}
                </option>
              ))}
            </select>
          </div>
          {/* INPUT DE FECHA Y HORA DE LA CITA */}
          <div className="container__inputs">
            <label htmlFor="fecha" className="label__citas labels">
              Fecha y hora
            </label>
            <input
              name="fecha"
              className="input__citas inputs"
              type="datetime-local"
              onChange={handleChange}
              value={cita.fecha}
              required
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
              required
            />
          </div>
          {/* BOTÓN PARA GUARDAR LA CITA */}
          <div className="container__inputs-modal">
            <p
              onClick={() => {
                handleClose();
                //formatearFormulario();
              }}
              className="btn__cancel"
            >
              Cancelar
            </p>
            <button
              type="submit"
              onClick={() => {
                handleClose();
                //formatearFormulario();
              }}
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
