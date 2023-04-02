import React, { useState, useEffect } from "react";
import NavBar from "@components/NavBar";
import ButtonNavBar from "@components/ButtonNavBar";
import FormPets from "@containers/FormPets";
import ListadoPets from "@containers/ListadoPets";
import ModalFormPets from "../containers/ModalFormPets";
import "@styles/Mascotas.scss";

const Mascotas = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    if (windowSize < 768) {
      setShow(!show);
    } else {
      setShow(!show);
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mascota, setMascota] = useState({
    idMascota: '',
    nombreMascota: '',
    fechaNacimiento: '',
    peso: '',
    notas: '',
    idCliente: '',
    nombreCliente: '',
    apellidosCliente: '',
    sexo: '',
    especie: '',
    raza: '',
  })
  const [mascotaEdit, setMascotaEdit] = useState({});

  // FUNCIÓN PARA OBTENER EL TAMAÑO DE LA PANTALLA
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    // Función que se ejecuta cada vez que cambia el tamaño de la ventana
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    // Añadir un event listener para el evento "resize"
    window.addEventListener('resize', handleResize);
    // Llamar a la función handleResize al inicio para comprobar el tamaño inicial de la pantalla
    handleResize();
    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <NavBar />
      {
        windowSize < 768 && (
          <ModalFormPets 
            className="modalFormCitas" 
            mascota={mascota}
            setMascota={setMascota} 
            show={show} 
            handleClose={handleClose} /> 
        )
      }
      <div className="container__pets">
        <div className="content__titlePets">
          <h3 className="title__pets">ADMINISTRADOR DE MASCOTAS</h3>
        </div>

        <div className="body__content-pets">
          <button className="button__pets button" onClick={handleShow}>
            AGREGAR MASCOTA
          </button>
          <div className="content__formPets">
            <FormPets
              mascota={mascota}
              setMascota={setMascota}
              show={show} 
              handleClose={handleClose}
            />
          </div>
          <div className="content__listPets">
            <ListadoPets 
              mascotaEdit={mascota}
              setMascotaEdit={setMascota}
              showModal = {showModal}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Mascotas