import React from "react";
import "@styles/FormCitas.scss";

const FormCitas = () => {
  return (
    <>
      <form className="form__citas">
        {/* <div className='container__inputs'>
                <label className='label__citas labels'>Nombre</label>
                <input className='input__citas inputs' type='text' placeholder='Nombre' />
              </div> */}
        {/* SELECT CON EL LISTADO DE CLIENTES */}
        <div className="container__inputs">
          <label className="label__citas labels">Cliente</label>
          <select className="input__citas inputs">
            <option value="1">Cliente 1</option>
            <option value="2">Cliente 2</option>
            <option value="3">Cliente 3</option>
          </select>
        </div>
        {/* SELECT CON EL LISTADO DE MASCOTAS */}
        <div className="container__inputs">
          <label className="label__citas labels">Mascota</label>
          <select className="input__citas inputs">
            <option value="1">Mascota 1</option>
            <option value="2">Mascota 2</option>
            <option value="3">Mascota 3</option>
          </select>
        </div>
        {/* INPUT DE FECHA Y HORA DE LA CITA */}
        <div className="container__inputs">
          <label className="label__citas labels">Fecha y hora</label>
          <input className="input__citas inputs" type="datetime-local" />
        </div>
        {/* DESCRIPCIÓN DE LA CITA */}
        <div className="container__inputs">
          <label className="label__citas labels">Descripción</label>
          <textarea
            className="input__citas inputs"
            type="text"
            placeholder="Descripción"
          />
        </div>
        {/* BOTÓN PARA GUARDAR LA CITA */}
        <div className="container__inputs">
            <button type="submit" className="button__citas">AGREGAR CITA</button>
        </div>

      </form>
    </>
  );
};

export default FormCitas;
