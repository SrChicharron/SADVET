import React, { useEffect, useState } from "react";
import useClientes from "@hooks/useClientes";
import useMascota from "@hooks/useMascotas";
import useCatalogos from "@hooks/useCatalogos";
import "@styles/FormPets.scss";
import "@styles/FormCitas.scss";

const FormEmail = ({ idCliente, setIdCliente, handleSubmit, handleChange,formMail }) => {
  //const url = "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";
  const url = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/cliente/getClientes";
  const clientes = useClientes.useGetClientes(url);

  // VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO DE CITAS
  const handle2ndChange = (event) => {
    setIdCliente(event.target.selectedIndex);
    console.log(idCliente);
  };

  return (
    <>
      <form className="form__pets" onSubmit={handleSubmit} ref={formMail}>
        <div className="container__inputs">
          <label htmlFor="idCliente" className="label__citas labels">
            Cliente
          </label>
          <select
            name="idCliente"
            className="input__citas inputs"
            onChange={handleChange}
          >
            <option value={0}>
            
            </option> 
            {clientes.map((cliente, indice) => (
              <option key={indice} value={cliente.id} >
                {cliente.nombre + " " + cliente.apellidos}
              </option>
            ))}
          </select>
        </div>
        {/* BOTÓN PARA GUARDAR LA CITA */}
        <div className="container__inputs">
          <button type="submit" className="button__citasPets button">
            ENVIAR RECETA
          </button>
        </div>
      </form>
    </>
  );
};

export default FormEmail;
