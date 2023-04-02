import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import useClientes from "@hooks/useClientes";
import useCitas from "@hooks/useCitas";
import "@styles/FormCitas.scss";

const FormCitas = ({ cita, setCita, handleSubmit, handleChange, formatearFormulario, formCita }) => {
  const url =
    "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";
  const clientes = useClientes.useGetClientes(url);

  return (
    <>
      <form className="form__citas" onSubmit={handleSubmit} ref={formCita}>
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
          <label htmlFor="fecha" className="label__citas labels">
            Fecha y hora
          </label>
          <input
            name="fecha"
            className="input__citas inputs"
            type="datetime-local"
            onChange={handleChange}
            value={cita.fecha}
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
        <div className="container__inputs">
          <button type="submit" className="button__citasForm button">
            AGREGAR CITA
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCitas;
