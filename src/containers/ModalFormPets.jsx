import React, { useState } from "react";
import useClientes from "@hooks/useClientes";
import useCatalogos from "@hooks/useCatalogos";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/ModalFormCitas.scss";

const ModalFormPets = ({
  show,
  handleClose,
  pet,
  setPet,
  idCliente,
  setIdCliente,
  handleSubmit,
  handleChange,
  formMascota,
}) => {
  const url = "http://srchicharron.com:2813/sadvet/cliente/getClientes";
  const urlEspecie = "http://srchicharron.com:2813/sadvet/catalogo/getEspecie";
  const urlSexo = "http://srchicharron.com:2813/sadvet/catalogo/getSexo";
  const clientes = useClientes.useGetClientes(url);
  const especies = useCatalogos.useGetCatalogo(urlEspecie);
  const sexos = useCatalogos.useGetCatalogo(urlSexo);
  
  console.log(pet);

  // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
  const handle2ndChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
    setIdCliente(event.target.selectedIndex);
    console.log(idCliente);
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
        <Modal.Title>AÑADIR MASCOTA</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <form className="form__citas" onSubmit={handleSubmit} ref={formMascota}>
        <div className="container__inputs">
          <label htmlFor="idCliente" className="label__citas labels">
            Dueño
          </label>
          <select
            name="idCliente"
            className="input__citas inputs"
            onChange={handle2ndChange}
            required
          >
            <option value={pet.idCliente}>
            {pet.nombreCliente + " " + pet.apellidoCliente}
            </option> 
            {clientes.map((cliente, indice) => (
              <option key={indice} value={cliente.id}>
                {cliente.nombre + " " + cliente.apellidos}
              </option>
            ))}
          </select>
        </div>
        <div className="container__inputs">
          <label htmlFor="nombreMascota" className=" labels">
            Nombre
          </label>
          <input
            name="nombreMascota"
            className=" inputs"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            value={pet.nombreMascota}
            required
          />
        </div>
        <div className="container__inputs">
        <label htmlFor="idEspecie" className="label__citas labels">
            Especie
          </label>
          <select
            name="idEspecie"
            className="input__citas inputs"
            onChange={handle2ndChange}
            required
          >
            <option value={pet.idEspecie}>
            {pet.especie}
            </option> 
            {especies.map((especie, indice) => (
              <option key={indice} value={especie.id}>
                {especie.especie}
              </option>
            ))}
          </select>
        </div>
        <div className="container__inputs">
          <label htmlFor="raza" className=" labels">
            Raza
          </label>
          <input
            name="raza"
            className=" inputs"
            type="text"
            placeholder="Raza"
            onChange={handleChange}
            value={pet.raza}
            required
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="fechaNacimiento" className="label__citas labels">
            Fecha de Nacimiento
          </label>
          <input
            name="fechaNacimiento"
            className="input__citas inputs"
            type="datetime-local"
            onChange={handleChange}
            value={pet.fechaNacimiento}
            required
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="edad" className=" labels">
            Edad
          </label>
          <input
            name="edad"
            className=" inputs"
            type="number"
            placeholder="Edad"
            onChange={handleChange}
            value={pet.edad}
            required
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="peso" className=" labels">
            Peso
          </label>
          <input
            name="peso"
            className=" inputs"
            type="number"
            placeholder="Peso en kg"
            onChange={handleChange}
            value={pet.peso}
            required
          />
        </div>
        <div className="container__inputs">
        <label htmlFor="idEspecie" className="label__citas labels">
            Sexo
          </label>
          <select
            name="idSexo"
            className="input__citas inputs"
            onChange={handle2ndChange}
            required
          >
            <option value={pet.idSexo}>
            {pet.sexo}
            </option> 
            {sexos.map((sexo, indice) => (
              <option key={indice} value={sexo.id}>
                {sexo.sexo}
              </option>
            ))}
          </select>
        </div>
        <div className="container__inputs">
          <label htmlFor="notas" className=" labels">
            Descripción General
          </label>
          <textarea
            className=" inputs textAreaPets"
            type="text"
            placeholder="Descripción general"
            name="notas"
            onChange={handleChange}
            value={pet.notas}
            required
          />
        </div>
          {/* BOTÓN PARA GUARDAR LA CITA */}
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
};

export default ModalFormPets;
