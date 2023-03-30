import React from "react";
import Pug from "@assets/images/pug.png";
import backpug from "@assets/images/Elipse.png";
import cat from "@assets/images/gato.png";
import male from "@assets/images/male.png";
import "@styles/ItemListCita.scss";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const ItemListCita = () => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        Action name
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
        <div className="container__itemListcita">
          <div className="content__imagePet">
            <img className="back__pug" src={backpug} alt="backpug" />
            <img className="pug" src={Pug} alt="Pug" />
          </div>
          <div className="content__information">
            <div className="content__name">
              <p className="cita__namePet">Pugberto</p>
            </div>
            <div className="content__info">
              <p>Pug</p>
              <p>Crema</p>
              <p>2 años</p>
              <p>6 kg</p>
            </div>
            <div className="content__datetime">
              <p>Sábado 12:00</p>
            </div>
            <div className="content__description">
              <p className="description">
                Tiene mucha diarrea y vomita mucho :c Tiene mucha diarrea y
                vomita mucho :c Tiene mucha diarrea y vomita mucho :c
              </p>
            </div>
            <img className="icon__gender" src={male} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ItemListCita;
