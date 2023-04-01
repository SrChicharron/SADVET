import React,{useState} from 'react'
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormClientes from "@containers/FormClientes"
import ListadoCitas from "@containers/ListadoCitas"
import '@styles/Clientes.scss'
import ModalFormCliente from '@containers/ModalFormCliente'
import Button from 'react-bootstrap/Button'

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
            <ListadoCitas />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Clientes