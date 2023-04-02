import React, { useState, useEffect } from "react";
import NavBar from "@components/NavBar";
import ButtonNavBar from "@components/ButtonNavBar";
import FormCitas from "@containers/FormCitas";
import ListadoCitas from "@containers/ListadoCitas";
import ModalFormCitas from "@containers/ModalFormCitas";
import "@styles/Home.scss";

const Home = () => {

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

  const [cita, setCita] = useState({
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
  })
  const [citaEdit, setCitaEdit] = useState({});

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
      {/* // Hacer una validación para cuando la pantalla sea menor a 768px mostrar el modal */}
      {
        windowSize < 768 && (
          <ModalFormCitas 
            className="modalFormCitas" 
            cita={cita}
            setCita={setCita} 
            show={show} 
            handleClose={handleClose} /> 
        )
      }
      <div className="container__citas">
        <div className="content__titleCitas">
          <h3 className="title__citas">ADMINISTRADOR DE CITAS</h3>
        </div>

        <div className="body__content">
          <button className="button__citas button" onClick={handleShow}>
            AGREGAR CITA
          </button>
          <div className="content__formCitas">
            <FormCitas 
              cita={cita}
              setCita={setCita}
              show={show} 
              handleClose={handleClose}
              // citasDataInit={citaEdit}
            />
          </div>
          <div className="content__listCitas">
            <ListadoCitas
              citaEdit={cita}
              setCitaEdit={setCita}
              showModal = {showModal}
              handleClose={handleClose}
              // citasDataInit={citaEdit}
              // setCitaEdit={setCitaEdit}
            />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  );
};

export default Home;
