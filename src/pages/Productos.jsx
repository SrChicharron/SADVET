import React,{useState, useEffect, useRef} from 'react'
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormProductos from "@containers/FormProductos"
import ListadoProductos from "@containers/ListadoProductos"
import axios from "axios";
import '@styles/Clientes.scss'


const Productos = () => {
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
    descripcion: "",
    precio: "",
  });

  const formCliente = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit");
    const formData = new FormData(formCliente.current);

    if (client.id === "" || client.id === undefined) {
      console.log("Es una nueva cita -> ");
      console.log(client);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/clientes/addcliente";
      const urlAdd = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/producto/addProducto";
      const newCliente = {
            nombre:formData.get('nombre'),
            descripcion:formData.get('descripcion'),
            precio:formData.get('precio'),
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
      const urlEdit = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/producto/updateProducto";
      
      const newCliente = {
            id: client.id,
            nombre:formData.get('nombre'),
            descripcion:formData.get('descripcion'),
            precio:formData.get('precio'),
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
      descripcion: "",
      precio: "",
    });
  };

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
    console.log(client);
  };

  // ----------------- LISTAR LOS CLIENTES -----------------
  //const urlGetClientes = 'http://srchicharron.com:8080/dancing-queen/clientes/getallclientes';
  const urlGetClientes = 'https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/producto/getProductos'
  
  const [clientes, setClientes] = useState([]);
  const fetchClientes = async () =>{
    const req = await axios.get(urlGetClientes);
    setClientes(req.data);
  };
  useEffect(()=>{
		fetchClientes();
	}, [])

  return (
    <div>
      <NavBar />
      <div className='container__clientes main__container'>
        <div className='content__titleClientes'>
          <h3 className='title__citas'>ADMINISTRADOR DE PRODUCTOS</h3>
        </div>

        <div className='body__content'>
        <button className="button__citas button btn__addCliente" onClick={handleShow}>
            AGREGAR PRODUCTO
          </button>
          <div className='content__formClientes'>
            <FormProductos 
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
          <div className='content__listClientes'>
            
            <ListadoProductos 
              clientes={clientes}
              clienteEdit={client}
              setClienteEdit={setClient}
              showModal={showModal}
              handleClose={handleClose}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Productos