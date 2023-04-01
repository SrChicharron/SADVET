import React,{useState} from 'react'
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormClientes from "@containers/FormClientes"
import ListadoClientes from "@containers/ListadoClientes"
import '@styles/Clientes.scss'
import ModalFormCliente from '@containers/ModalFormCliente'


const Clientes = () => {
  

  const [modal, setModal] = useState(false);
  const openModal= ()=>{
    setModal(!modal)
    }

  return (
    <div>
      <NavBar />
      <div className='container__clientes'>
        <div className='content__titleClientes'>
          <h3 className='title__citas'>ADMINISTRADOR DE CLIENTES</h3>
         <input type='button' className='botonAgregarClientes' value='Agregar cliente' onClick={openModal}/> 
        </div>

        <div className='body__content'>
          <div className='content__formClientes'>
            {modal && <ModalFormCliente/>}
            <FormClientes/>
          </div>
          <div className='content__listClientes'>
            
            <ListadoClientes />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Clientes