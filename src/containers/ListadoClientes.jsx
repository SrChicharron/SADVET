import React from 'react';
import useGetClientes from '../hooks/useGetClientes'
import ItemListCliente from '@components/ItemListCliente';
const ListadoClientes = () => {
  const apiGetClientes="http://srchicharron.com:8080/dancing-queen/clientes/getallclientes"
  const allClientes=useGetClientes(apiGetClientes)
    return (
        <div>
            {allClientes.map(allClientes=>{
                        return <ItemListCliente allClientes={allClientes} key={allClientes.id}/>
                    })}
        </div>
    );
}

export default ListadoClientes;