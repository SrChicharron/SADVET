import React from 'react';
import useGetClientes from '../hooks/useGetClientes'
import ItemListCliente from '@components/ItemListCliente';
const ListadoClientes = ({showModal,setClienteEdit,setClientes}) => {
  const apiGetClientes="http://srchicharron.com:8080/dancing-queen/clientes/getallclientes"
  const allClientes=useGetClientes(apiGetClientes)
  setClientes(allClientes)
    return (
        <div>
            {allClientes.map(cliente=>{
                        return <ItemListCliente showModal={showModal} cliente={cliente} key={cliente.id} setClienteEdit={setClienteEdit}/>
                    })}
        </div>
    );
}

export default ListadoClientes;