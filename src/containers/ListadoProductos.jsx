import React from 'react';
import ItemListProducto from '@components/ItemListProducto';
import '@styles/ItemListCliente.scss';
const ListadoProductos = ({ clientes, clienteEdit, setClienteEdit, showModal, handleClose, onDelete }) => {

    return (
        <div>
            {clientes.map(cliente=>{
                return <ItemListProducto 
                key = {cliente.id}
                idCliente = {cliente.id}
                cliente = {cliente}
                clienteEdit = {clienteEdit}
                setClienteEdit = {setClienteEdit}
                showModal = {showModal}
                handleClose={handleClose}
                onDelete={onDelete}
                />
            })}
        </div>
    );
}

export default ListadoProductos;