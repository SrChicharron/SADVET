import React,{useState, useEffect, useRef} from 'react'
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormReceta from "@containers/FormReceta"
import FormEmail from "@containers/FormEmail"
import ListadoReceta from "@containers/ListadoReceta"
import axios from "axios";
import '@styles/Clientes.scss'


const Recetas = () => {
  // ----------------- VARIABLES PARA EL MODAL -----------------
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
  const [client, setClient] = useState({
    id: "",
    nombre: "",
    cantidad: "",
    precio: "",
    subtotal: "",
    idProducto: "",
  });

  const [client2, setClient2] = useState({
    id: "",
  });
  const [total, setTotal] = useState(0.0);

  const formCliente = useRef(null);
  const formCliente2 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit");
    const formData = new FormData(formCliente.current);

    if (client.id === "" || client.id === undefined) {
      console.log("Es una nueva cita -> ");
      console.log(client);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/clientes/addcliente";
      const urlAdd = "http://srchicharron.com:2813/sadvet/receta/addReceta";
      const newCliente = {
            idProducto:formData.get('idProducto'),
            cantidad:formData.get('cantidad'),
      };
      console.log("Datos del nuevo cliente");
      console.log(newCliente);
      axios({
        method: "POST",
        url: urlAdd,
        data: JSON.stringify(newCliente),
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
          fetchClientes();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Se tiene que editar este cliente -> " + client.idCliente);
      console.log(client);

      //const urlEdit = "http://srchicharron.com:8080/dancing-queen/clientes/updatecliente";
      const urlEdit = "http://srchicharron.com:2813/sadvet/receta/updateReceta";
      
      const newCliente = {
            id: client.id,
            idProducto:formData.get('idProducto'),
            cantidad:formData.get('cantidad'),
      };
      console.log("Datos del newCliente");
      console.log(newCliente);
      axios({
        method: "POST",
        url: urlEdit,
        data: JSON.stringify(newCliente),
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
          fetchClientes();
          formatearFormulario();
        })
        .catch((error) => {
          formatearFormulario();
          console.error(error);
        });
    }
    formatearFormulario();
  };

  //a
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit2");
    //const formData2 = new FormData(formCliente2.current);

    if (client2.id !== "" || client2.id !== 0) {
      console.log("enviar correo -> ");
      console.log(client2);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/clientes/addcliente";
      const urlAdd = "http://srchicharron.com:2813/sadvet/receta/enviar?id="+client2.idCliente;
      axios({
        method: "POST",
        url: urlAdd,
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
        })
        .catch((error) => {
          console.error(error);
        });
    } 
    limpiarTotal();
  };

  const onDelete = () => {
    
    console.log("onDeleteOrigin");
    formatearFormulario();
    fetchClientes();
  };

  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setClient({
      id: "",
      nombre: "",
      cantidad: "",
      precio: "",
      subtotal: "",
      idProducto: "",
    });
  };

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
    console.log(client);
  };

  const handleChange2 = (event) => {
    setClient2({ ...client2, [event.target.name]: event.target.value });
    console.log(client2);
  };

  // ----------------- LISTAR LOS CLIENTES -----------------
  //const urlGetClientes = 'http://srchicharron.com:8080/dancing-queen/clientes/getallclientes';
  const urlGetClientes = 'http://srchicharron.com:2813/sadvet/receta/getReceta'
  const urlTotal = 'http://srchicharron.com:2813/sadvet/receta/total'
  const urlLimpiar = 'http://srchicharron.com:2813/sadvet/receta/deleteAll'
  
  const [clientes, setClientes] = useState([]);
  const getSum = async () =>{
    const req = await axios.get(urlTotal);
    setTotal(req.data);
  };
  const fetchClientes = async () =>{
    const req = await axios.get(urlGetClientes);
    setClientes(req.data);
  };

  const limpiarTotal = async () =>{
    const req = await axios.post(urlLimpiar);
    getSum();
    fetchClientes();
  };

  useEffect(()=>{
		fetchClientes();
        getSum();
	}, [clientes])

  return (
    <div>
      <NavBar />
      <div className='container__clientes main__container'>
        <div className='content__titleClientes'>
          <h3 className='title__citas'>GENERADOR DE RECETAS</h3>
        </div>

        <div className='content__titleClientes'>
          <h3 className='title__citas'>Total: ${total}</h3>
        </div>

        <div className='body__content'>
        <button className="button__citas button btn__addCliente" onClick={handleShow}>
            AGREGAR A LA RECETA
          </button>
          <div className='content__formClientes'>
            <FormReceta 
              client={client}
              setClient={setClient}
              show={show}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formatearFormulario={formatearFormulario}
              formCliente={formCliente}
            />
          </div>
          <FormEmail 
              client={client2}
              setClient={setClient2}
              show={show}
              handleClose={handleClose}
              handleSubmit={handleSubmit2}
              handleChange={handleChange2}
              formatearFormulario={formatearFormulario}
              formCliente={formCliente2}
            />
          <div className='content__listClientes'>
            
            <ListadoReceta 
              clientes={clientes}
              clienteEdit={client}
              setClienteEdit={setClient}
              showModal={showModal}
              handleClose={handleClose}
              onDelete={onDelete}
            />
          </div>
        </div>
        <button className="botonPrincipal" onClick={limpiarTotal}>
            Limpiar
          </button>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Recetas