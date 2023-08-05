import React, { useEffect, useState } from "react";
import useClientes from "@hooks/useClientes";
import useMascota from "@hooks/useMascotas";
import useCatalogos from "@hooks/useCatalogos";
import "@styles/FormPets.scss";
import "@styles/FormCitas.scss";

const FormPets = ({ pet, setPet,idCliente, setIdCliente, handleSubmit, handleChange,formMascota }) => {
  //const url = "http://srchicharron.com:8080/dancing-queen/clientes/getallclientes";
  const url = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/cliente/getClientes";
  const urlEspecie = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/catalogo/getEspecie";
  const urlSexo = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/catalogo/getSexo";
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
    <>
      <form className="form__pets" onSubmit={handleSubmit} ref={formMascota}>
        <div className="container__inputs">
          <label htmlFor="idCliente" className="label__citas labels">
            Dueño
          </label>
          <select
            name="idCliente"
            className="input__citas inputs"
            onChange={handle2ndChange}
          >
            <option value={0}>
            
            </option> 
            {clientes.map((cliente, indice) => (
              <option key={indice} value={cliente.id} selected={pet.idCliente === cliente.id}>
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
          >
            <option value={0}>
            
            </option> 
            {especies.map((especie, indice) => (
              <option key={indice} value={especie.id} selected={pet.idEspecie === especie.id}>
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
          >
            <option value={0}>
            
            </option> 
            {sexos.map((sexo, indice) => (
              <option key={indice} value={sexo.id} selected={pet.idSexo === sexo.id}>
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
