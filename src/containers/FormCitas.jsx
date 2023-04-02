import React, { useEffect, useState } from "react";
import axios from "axios";
import useClientes from "@hooks/useClientes";
import useCitas from "@hooks/useCitas";
import "@styles/FormCitas.scss";

const FormCitas = ({ cita, setCita }) => {

  const [citaForm, setCitaForm] = useState({
    fecha: cita.fecha,
    descripcion: cita.descripcion,
    idCliente: cita.cliente.id,
    idMascota: cita.mascota.id
  })
  const url = "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";

  const clientes = useClientes.useGetClientes(url);

  // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
  const handleChange = (event) => {
    setCitaForm({ ...citaForm, [event.target.name]: event.target.value });
    // Setear los valores de citaForm a cita
    setCita({
      fecha: citaForm.fecha,
      descripcion: citaForm.descripcion,
      cliente: {
        id: citaForm.idCliente
      },
      mascota: {
        id: citaForm.idMascota
      }
    })
    console.log(cita);
    console.log(citaForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hanldeSubmit")

    // Hacer una validación si cita.idCita es vacio crear una cita, si no es vacio editar una cita
    if (cita.idCita === "" || cita.idCita === undefined) {
      console.log("Es una nueva cita -> ");
      console.log("Datos de la cita")
      console.log(cita)
      const url = "http://srchicharron.com:8080/dancing-queen/citas/addcita";
      useCitas.useAddCita(url, cita);
      //crearCita();
    } else {
      console.log("Se tiene que editar esta cita -> " + cita.idCita);
      //editarCita();
    }
  };

  // Funciones para crear una cita
  const crearCita = () => {
    const url = "http://srchicharron.com:8080/dancing-queen/citas/addcita";
    const citas = cita;
    console.log(cita);
    const cita = useCitas.useAddCita(url, citas);
    //formatearFormulario();
  };

  // // Funciones para editar una cita
  // const editarCita = () => {
  //   const url = "http://srchicharron.com:8080/dancing-queen/citas/editcita";
  //   const citas = cita;
  //   const cita = useCitas.useEditCita(url, citas);
  //   console.log(cita);
  //   formatearFormulario();
  // };

  // // FUNCION PARA ELIMINAR UNA CITA
  // const eliminarCita = (idCita) => {
  //   const url = "http://srchicharron.com:8080/dancing-queen/citas/deletecita";
  //   const citas = cita;
  //   const cita = useCitas.useDeleteCita(url, citas);
  //   console.log(cita);
  //   formatearFormulario();
  // };

  //Funcion para formatear el formulario
  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setCita({
      idCita: '',
      fecha: '',
      descripcion: '',
      cliente: {
        id: '',
        nombre: '',
        apellidos: '',
      },
      mascota: {
        id: '',
        nombre: '',
      }
    });
    setCitaForm({
      fecha: "",
      descripcion: "",
      idCliente: "",
      idMascota: ""
    })
  };
  return (
    <>
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
              {cita.cliente.nombre + " " + cita.cliente.apellidos}
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
            <option value={cita.mascota.id}>{cita.mascota.nombre}</option>
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
