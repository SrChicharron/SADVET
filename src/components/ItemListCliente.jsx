import React, {useContext,useState} from "react";
import AvatarH from "@assets/images/AvatarH.png";
import "@styles/ItemListCliente.scss";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import axios from "axios";

const ItemListCliente = ({cliente, showModal,setClienteEdit}) => {

const [clienteEditItem, setClienteEditItem] = useState({
    idCli: cliente.id,
    nombre: cliente.nombre,
    apellidos: cliente.apellidos,
    telefono: cliente.telefono,
    email: cliente.email
  });
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
          setClienteEdit(clienteEditItem);
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
        onClick={() => console.info("swipe action triggered")}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="container__itemListcliente">
          
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
              <p className="descriptionCliente">
                <p>Mascotas:</p>
                <ul>
                  <li>Pugberto</li>
                  <li>Chiguasberta</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ItemListCliente;