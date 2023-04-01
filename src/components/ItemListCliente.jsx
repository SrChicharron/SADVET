import React, {useContext} from "react";
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
import AppContext from "../context/AppContext";

const ItemListCliente = ({allClientes}) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
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
              <p className="cita__nameCliente">{allClientes.nombre} {allClientes.apellidos}</p>
            </div>
            <div className="content__infoCliente">
              <p>{allClientes.email}</p>
            </div>
            <div className="content__telefonoCliente">
              <p>{allClientes.telefono}</p>
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