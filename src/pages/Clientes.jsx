import React,{useState, useEffect} from 'react'
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormClientes from "@containers/FormClientes"
import ListadoClientes from "@containers/ListadoClientes"
import '@styles/Clientes.scss'
import ModalFormCliente from '@containers/ModalFormCliente'


const Clientes = () => {
  
  const [show, setShow] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const showModal = () => {
    if (windowSize < 768) {
      setShow(!show);
    } else {
      setShow(!show);
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cliente, setCliente] = useState({
    idCliente: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  });

  const formatearFormulario = () => {
    // LIMPIAR EL FORMULARIO
    setCliente({
      idCliente: "",
      nombre: "",
      apellidos: "",
      telefono: "",
      email: "",
    });
  };

  const handleChange = (event) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
    console.log(cliente);
  };

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

  const [clientes, setClientes] = useState([]);

  return (
    <div>
      <NavBar />
      <div className='container__clientes'>
        <div className='content__titleClientes'>
          <h3 className='title__citas'>ADMINISTRADOR DE CLIENTES</h3>
         <input type='button' className='botonAgregarClientes' value='Agregar cliente' onClick={handleShow}/> 
        </div>

        <div className='body__content'>
          <div className='content__formClientes'>
            {windowSize<768&&<ModalFormCliente show={show} handleClose={handleClose}/>}
            <FormClientes show={show} handleClose={handleClose} cliente={cliente} handleChange={handleChange}/>
          </div>
          <div className='content__listClientes'>
            
            <ListadoClientes clientes={clientes} setClientes={setClientes} showModal={showModal} handleClose={handleClose} setClienteEdit={setCliente}/>
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Clientes