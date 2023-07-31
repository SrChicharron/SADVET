import React from 'react';
import ItemListReceta from '@components/ItemListReceta';
import '@styles/ItemListCliente.scss';
const ListadoReceta = ({ clientes, clienteEdit, setClienteEdit, showModal, handleClose, onDelete }) => {

    return (
        <div>
            {clientes.map(cliente=>{
                return <ItemListReceta
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

export default ListadoReceta;