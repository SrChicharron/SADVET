import React, {useContext,useState} from "react";
import AvatarH from "@assets/images/AvatarH.png";
import "@styles/ItemListCita.scss";
import "@styles/swipeable-list.scss";
import "react-swipeable-list/dist/styles.css";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import axios from "axios";

const ItemListReceta = ({id,cliente,clienteEdit,setClienteEdit,showModal,handleClose,onDelete}) => {

const [clienteEditItem, setClienteEditItem] = useState({
    id: cliente.id,
    nombre: cliente.nombre,
    cantidad: cliente.cantidad,
    precio: cliente.precio,
    subtotal: cliente.subtotal,
    idProducto: cliente.idProducto,
  });
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
          setClienteEdit(clienteEditItem);
          console.log(clienteEdit);
          console.log(clienteEditItem);
          showModal();
        }}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => {
          console.log("eliminar"+clienteEditItem.id)
          console.log(clienteEdit);
          console.log(clienteEditItem);
          console.log("se establecio el cliente to deelete");
          deleteCliente();
        }}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  const deleteCliente = () => {
    
    console.log("onDelete");
      console.log("Es una nueva cita -> ");
      console.log(clienteEditItem);

      //const urlAdd = "http://srchicharron.com:8080/dancing-queen/clientes/deletecliente";
      const urlAdd = "https://sadvetapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/sadvet/receta/deleteReceta";
      const newCliente = {
        id: clienteEditItem.id,
      };
      console.log("Datos del newCliente");
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
          onDelete();
        })
        .catch((error) => {
          console.error(error);
        });
    
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        {/* <div className="container__itemListcliente">
          
            <img className="avatar" src={AvatarH} alt="AvatarCliente" />
          
          <div className="content__informationCliente">
            <div className="content__nameCliente">
              <p className="cita__nameCliente">{cliente.nombre} {cliente.apellidos}</p>
            </div>
            <div className="content__infoCliente">
              <p>{cliente.email}</p>
            </div>
            <div className="content__telefonoCliente">
              <p>{cliente.telefono}</p>
            </div>
            <div className="content__descriptionCliente">
            </div>
          </div>
        </div> */}
        <div className="container__itemListcita">
          <div className="content__information">
            <div className="content__name">
              <p className="cita__namePet">{cliente.nombre}</p>
            </div>
            <div className="content__info">
            <p>Cantidad</p>
            <p>{cliente.cantidad}</p>
            </div>
            <div className="content__info">
            <p>Precio</p>
            <p>${cliente.precio}</p>
            </div>
            <div className="content__info">
            <p>Subtotal</p>
            <p>${cliente.subtotal}</p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ItemListReceta;