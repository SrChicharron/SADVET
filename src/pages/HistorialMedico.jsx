import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "@components/NavBar";
import ButtonNavBar from "@components/ButtonNavBar";
import FormHistorial from "@containers/FormHistorial";
import ListadoHistorial from "@containers/ListadoHistorial";
import ModalFormCitas from "@containers/ModalFormCitas";
import ModalFormRecetas from "../containers/ModalFormRecetas";
import "@styles/Home.scss";

const HistorialMedico = () => {
  const [idCliente, setIdCliente] = useState(0);
  const [idMascota, setIdMascota] = useState(0);
  // ----------------- VARIABLES PARA EL MODAL -----------------
  const [show, setShow] = useState(false);
  const showModal = () => {
    if (windowSize < 768) {
      setShow(!show);
    } else {
      setShow(!show);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//-------------------------------------------------
const [show2, setShow2] = useState(false);
const showModal2 = () => {
  if (windowSize < 768) {
    setShow2(!show);
  } else {
    setShow2(!show);
  }
};
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);
  // ----------------- OBTENER EL TAMAÑO DE LA PANTALLA -----------------
  // FUNCIÓN PARA OBTENER EL TAMAÑO DE LA PANTALLA
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    // Función que se ejecuta cada vez que cambia el tamaño de la ventana
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    // Añadir un event listener para el evento "resize"
    window.addEventListener("resize", handleResize);
    // Llamar a la función handleResize al inicio para comprobar el tamaño inicial de la pantalla
    handleResize();
    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ----------------- VARIABLES PARA EL FORMULARIO -----------------
  const [cita, setCita] = useState({
    id: "",
    fecha: "",
    descripcion: "",
    idCliente: "",
    idMascota: "",
  });
  const formCita = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit");
    const formData = new FormData(formCita.current);

    if (cita.id === "" || cita.id === undefined) {
      console.log("Es una nueva cita -> ");
      console.log(cita);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/citas/addcita";
      const urlAdd = "http://srchicharron.com:2813/sadvet/historial/addHistorial";
      const newCita = {
        fecha: formData.get("fecha"),
        descripcion: formData.get("descripcion"),
        idCliente: formData.get("idCliente"),
        idMascota: formData.get("idMascota"),
      };
      console.log("Datos de la newCita");
      console.log(newCita);
      axios({
        method: "POST",
        url: urlAdd,
        data: JSON.stringify(newCita),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      })
        .then((response) => {
          console.log(response);
          formatearFormulario();
          getAllCitas();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Se tiene que editar esta cita -> " + cita.idCita);
      console.log(cita);

      const urlEdit = "http://srchicharron.com:2813/sadvet/historial/updateHistorial";
      const newCita = {
        id: cita.id,
        fecha: formData.get("fecha"),
        descripcion: formData.get("descripcion"),
        idCliente: formData.get("idCliente"),
        idMascota: formData.get("idMascota"),
      };
      console.log("Datos de la newCita");
      console.log(newCita);
      axios({
        method: "POST",
        url: urlEdit,
        data: JSON.stringify(newCita),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      })
        .then((response) => {
          console.log(response);
          formatearFormulario();
          getAllCitas();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };


  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setCita({
      idCita: "",
      fecha: "",
      descripcion: "",
      idCliente: "",
      idMascota: "",
    });
  };

  const handleChange = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
    console.log(cita);
  };

  // ----------------- LISTAR LAS CITAS -----------------
  const [citas, setCitas] = useState([]);
  //const url = "http://srchicharron.com:8080/dancing-queen/citas/getallcitas";
  
  const getAllCitas = async () => {
    let url=""
  if(idMascota===0){
    url = "http://srchicharron.com:2813/sadvet/historial/getHistorialById?id="+idMascota;
  }else{
    url = "http://srchicharron.com:2813/sadvet/historial/getHistorialById?id="+idMascota;
  }
  //const url = "http://srchicharron.com:2813/sadvet/historial/getCitas";
    const req = await axios.get(url);
    setCitas(req.data);
  };
  useEffect(() => {
    console.log("Ejecuta effect")
    getAllCitas();
  }, [idMascota]);
  return (
    <div>
      <NavBar />
      {/* // Hacer una validación para cuando la pantalla sea menor a 768px mostrar el modal */}
      <div className="container__citas">
        <div className="content__titleCitas">
          <h3 className="title__citas">HISTORIALES MEDICOS</h3>
        </div>

        <div className="body__content-home">
          <button className="button__citas button" onClick={handleShow}>
            AGREGAR AL HISTORIAL
          </button>
          <div className="content__formCitas">
            <FormHistorial
              cita={cita}
              setCita={setCita}
              show={show}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formatearFormulario={formatearFormulario}
              formCita={formCita}
              setIdCustommer={setIdCliente}
              idCustommer={idCliente}
              setIdPet={setIdMascota}
              // citasDataInit={citaEdit}
            />
          </div>
          <div className="content__listCitas">
            <ListadoHistorial
              citas={citas}
              setCitas={setCitas}
              citaEdit={cita}
              setCitaEdit={setCita}
              showModal={showModal}
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

export default HistorialMedico;
