import React, { useState, useEffect, useRef } from "react";
import NavBar from "@components/NavBar";
import ButtonNavBar from "@components/ButtonNavBar";
import FormPets from "@containers/FormPets";
import ListadoPets from "@containers/ListadoPets";
import ModalFormPets from "../containers/ModalFormPets";
import axios from "axios";
import "@styles/Mascotas.scss";

const Mascotas = () => {
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
  const [pet, setPet] = useState({
    id: "",
    nombre: "",
    fechaNacimiento: "",
    peso: "",
    notas: "",
    idCliente: "",
    idEspecie: "",
    idSexo: "",
    raza: "",
  });

  const formMascota = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit");
    console.log(pet);
    const formData = new FormData(formMascota.current);

    if (pet.id === "" || pet.id === undefined) {
      console.log("Es una nueva cita -> ");
      console.log(pet);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/mascotas/addmascota";
      const urlAdd = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/mascota/addMascota";
      const newPet = {
        nombre: formData.get("nombreMascota"),
        fechaNacimiento: formData.get("fechaNacimiento"),
        peso: formData.get("peso"),
        notas: formData.get("notas"),
        raza: formData.get("raza"),
        idEspecie:formData.get("idEspecie"),
        idSexo:formData.get("idSexo"),
        idCliente: formData.get("idCliente"),
      };
      console.log("Datos de la newPet");
      console.log(newPet);
      axios({
        method: "POST",
        url: urlAdd,
        data: JSON.stringify(newPet),
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
          fetchMascotas();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Se tiene que editar esta cita -> " + pet.idMascota);
      console.log(pet);

      //const urlEdit = "http://srchicharron.com:8080/dancing-queen/mascotas/updatemascota";
      const urlEdit = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/mascota/updateMascota";
      const newPet = {
        id: pet.id,
        nombre: formData.get("nombreMascota"),
        fechaNacimiento: formData.get("fechaNacimiento"),
        peso: formData.get("peso"),
        notas: formData.get("notas"),
        raza: formData.get("raza"),
        idEspecie:formData.get("idEspecie"),
        idSexo:formData.get("idSexo"),
        idCliente: formData.get("idCliente"),
        
      };
      console.log("Datos de la newCita");
      console.log(newPet);
      axios({
        method: "POST",
        url: urlEdit,
        data: JSON.stringify(newPet),
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
          fetchMascotas();
          formatearFormulario();
        })
        .catch((error) => {
          formatearFormulario();
          console.error(error);
        });
    }
  };

  const onDelete = () => {
    console.log("onDeleteOrigin");
    formatearFormulario();
    fetchMascotas();
  };

  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setPet({
      id: "",
      nombre: "",
      fechaNacimiento: "",
      peso: "",
      notas: "",
      idCliente: "",
      raza: "",
      idEspecie:"",
      idSexo:"",
    });
  };

  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
    console.log(pet);
  };

  // ----------------- LISTAR LAS MASCOTAS -----------------
  //const urlGetPets = "http://srchicharron.com:8080/dancing-queen/mascotas/getmascotasbyclienteid?idCliente=";
  let urlGetPets=""
  if(pet.idCliente===""){
    urlGetPets = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/mascota/getMascotasByIdCliente?id=0";
  }else{
    urlGetPets = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/mascota/getMascotasByIdCliente?id="+pet.idCliente;
  }
  //const urlGetPets = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/mascota/getMascotasByIdCliente?id=";
  const [idCliente, setIdCliente] = useState(0);
  const [pets, setPets] = useState([]);
  const fetchMascotas = async () => {
    const req = await axios.get(urlGetPets);
    setPets(req.data);
  };
  useEffect(() => {
    fetchMascotas();
  }, [idCliente]);
  return (
    <div>
      <NavBar />
      <div className="container__pets main__container">
        <div className="content__titlePets">
          <h3 className="title__pets">ADMINISTRADOR DE MASCOTAS</h3>
        </div>

        <div className="body__content-pets">
          <button className="button__pets button" onClick={handleShow}>
            AGREGAR MASCOTA
          </button>
          <div className="content__formPets">
            <FormPets
              pet={pet}
              setPet={setPet}
              show={show}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formatearFormulario={formatearFormulario}
              formMascota={formMascota}
              idCliente={idCliente}
              setIdCliente={setIdCliente}
            />
          </div>
          <div className="content__listPets">
            <ListadoPets
              pets={pets}
              mascotaEdit={pet}
              setMascotaEdit={setPet}
              showModal={showModal}
              handleClose={handleClose}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  );
};

export default Mascotas;
