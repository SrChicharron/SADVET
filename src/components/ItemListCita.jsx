import React, { useState, useEffect } from "react";
import Pug from "@assets/images/pug.png";
import backpug from "@assets/images/Elipse.png";
import cat from "@assets/images/gato.png";
import male from "@assets/images/male.png";
import female from "@assets/images/female.png";
import "@styles/ItemListCita.scss";
import "@styles/swipeable-list.scss";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const ItemListCita = ( { idCita, cita, citaEdit, setCitaEdit, showModal, handleClose } ) => {
  const [citaEditItem, setCitaEditItem] = useState({
    idCita: cita.id,
    fecha: cita.fecha,
    descripcion: cita.descripcion,
    cliente: {
      id: cita.cliente.id,
      nombre: cita.cliente.nombre,
      apellidos: cita.cliente.apellidos,
    },
    mascota: {
      id: cita.mascota.id,
      nombre: cita.mascota.nombre,
    }
  })
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
        setCitaEdit(citaEditItem)
        console.log(citaEdit)
        console.log(citaEditItem)
        showModal();
      }
        }>
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
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="container__itemListcita">
          <div className="content__imagePet">
            <img className="back__pug" src={backpug} alt="backpug" />
            {
              cita.mascota.especie == "PERRO" ? (
              <img className="pug" src={Pug} alt="Mascota" /> ) : (
                <img className="cat" src={cat} alt="Mascota" /> )
            }
          </div>
          <div className="content__information">
            <div className="content__name">
              <p className="cita__namePet">{cita.mascota.nombre}</p>
            </div>
            <div className="content__info">
              <p>{cita.mascota.raza}</p>
              <p>{cita.mascota.sexo}</p>
              <p>{cita.mascota.edad} años</p>
              <p>{cita.mascota.peso} kg</p>
            </div>
            <div className="content__datetime">
              <p>{cita.fecha}</p>
            </div>
            <div className="content__description">
              <p className="description">
                {cita.descripcion}
              </p>
            </div>
            <img className="icon__gender" src={cita.mascota.sexo == "M" ? male : female} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ItemListCita;
