import React, { useEffect, useState } from "react";
import useClientes from "@hooks/useClientes";
import useMascota from "@hooks/useMascotas";
import "@styles/FormPets.scss";
import "@styles/FormCitas.scss";

const FormPets = ({ mascota, setMascota }) => {
  const url =
    "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";
  const clientes = useClientes.useGetClientes(url);

  // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
  const handleChange = (event) => {
    setMascota({ ...cita, [event.target.name]: event.target.value });
    console.log(mascota);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hacer una validación si cita.idCita es vacio crear una cita, si no es vacio editar una cita
    if (mascota.idMascota === "" || mascota.idMascota === undefined) {
      // console.log("Es una nueva cita -> " + cita.idCita);
      crearMascota();
    } else {
      // console.log("Se tiene que editar esta cita -> " + cita.idCita);
      editarMascota();
    }
  };

  // Funciones para crear una cita
  const crearMascota = () => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/addcita";
    const mascotas = mascota;
    const mascota = useMascota.useAddMascota(url, mascotas);
    console.log(mascota);
    formatearFormulario();
  };

  // Funciones para editar una cita
  const editarMascota = () => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/editcita";
    const mascotas = mascota;
    const mascota = useMascota.useEditMascota(url, mascotas);
    console.log(mascota);
    formatearFormulario();
  };

  // FUNCION PARA ELIMINAR UNA CITA
  const eliminarMascota = (idMascota) => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/deletecita";
    const mascotas = mascota;
    const mascota = useMascota.useDeleteMascota(url, mascota);
    console.log(mascota);
    formatearFormulario();
  };

  //Funcion para formatear el formulario
  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setMascota({
      idMascota: "",
      nombreMascota: "",
      fechaNacimiento: "",
      peso: "",
      notas: "",
      idCliente: "",
      nombreCliente: "",
      apellidosCliente: "",
      sexo: "",
      especie: "",
      raza: "",
    });
  };

  return (
    <>
      <form className="form__pets" onSubmit={handleSubmit}>
        <div className="container__inputs">
          <label htmlFor="idCliente" className="label__citas labels">
            Dueño
          </label>
          <select
            name="idCliente"
            className="input__citas inputs"
            onChange={handleChange}
          >
            <option value={mascota.idCliente}>
              {mascota.nombreCliente + " " + mascota.apellidosCliente}
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
            value={mascota.nombreMascota}
          />
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
            value={mascota.raza}
          />
        </div>
        <div className="container__inputs">
          <label htmlFor="fechaNacimiento" className=" labels">
            Edad
          </label>
          <input
            name="fechaNacimiento"
            className=" inputs"
            type="number"
            placeholder="Edad"
            onChange={handleChange}
            value={mascota.fechaNacimiento}
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
            value={mascota.peso}
          />
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
            value={mascota.notas}
          />
        </div>
        {/* BOTÓN PARA GUARDAR LA CITA */}
        <div className="container__inputs">
          <button type="submit" className="button__citasPets button">
            AGREGAR MASCOTA
          </button>
        </div>
      </form>
    </>
  );
};

export default FormPets;
