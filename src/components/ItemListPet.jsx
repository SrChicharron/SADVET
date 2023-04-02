import React, { useState, useEffect } from "react";
import Pug from "@assets/images/pug.png";
import cat from "@assets/images/gato.png";
import backpug from "@assets/images/Elipse.png";
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

const ItemListPet = ({idMascota,mascota,mascotaEdit,setMascotaEdit,showModal,handleClose,}) => {
  const [mascotaEditItem, setMascotaEditItem] = useState({
    idMascota: mascota.id,
    nombreMascota: mascota.cliente.id,
    fechaNacimiento: mascota.cliente.nombre,
    peso: mascota.cliente.apellidos,
    notas: mascota.detalleMascotaCita[0].mascota.id,
    idCliente: mascota.detalleMascotaCita[0].mascota.nombre,
    nombreCliente: mascota.fechaHora,
    apellidosCliente: mascota.detalleMascotaCita[0].mascota.notas,
    sexo: mascota.detalleMascotaCita[0].mascota.notas,
    especie: mascota.detalleMascotaCita[0].mascota.notas,
    raza: mascota.detalleMascotaCita[0].mascota.notas,
  });
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => {
          setMascotaEdit(mascotaEditItem);
          console.log(mascotaEdit);
          console.log(mascotaEditItem);
          showModal();
        }}
      >
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
              mascota.detalleMascotaCita[0].mascota.especie == "PERRO" ? (
              <img className="pug" src={Pug} alt="Mascota" /> ) : (
                <img className="cat" src={cat} alt="Mascota" /> )
            }
          </div>
          <div className="content__information">
            <div className="content__name">
              <p className="cita__namePet">{mascota.detalleMascotaCita[0].mascota.nombre}</p>
            </div>
            <div className="content__info">
              <p>{mascota.detalleMascotaCita[0].mascota.raza}</p>
              <p>{mascota.detalleMascotaCita[0].mascota.sexo}</p>
              <p>{mascota.detalleMascotaCita[0].mascota.edad} años</p>
              <p>{mascota.detalleMascotaCita[0].mascota.peso} kg</p>
            </div>
            <div className="content__datetime">
              <p>{mascota.fecha}</p>
            </div>
            <div className="content__description">
              <p className="description">
                {mascota.detalleMascotaCita[0].mascota.notas}
              </p>
            </div>
            <img className="icon__gender" src={mascota.detalleMascotaCita[0].mascota.sexo == "M" ? male : female} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ItemListPet;
