import React, { useEffect, useState} from "react";
import axios from "axios";
import useCitas from "@hooks/useCitas";
import ItemListCitas from '@components/ItemListCita'
import '@styles/ListadoCitas.scss'

const ListadoCitas = ( { citaEdit, setCitaEdit, showModal, handleClose } ) => {
  const url = 'http://srchicharron.com:8080/dancing-queen/citas/getallcitas';

  const citasResponse = useCitas.useGetCitas(url);

  return (
    <div>
      {citasResponse.map((cita) => {
        return <ItemListCitas
          key = {cita.id}
          idCita = {cita.id}
          cita = {cita}
          citaEdit = {citaEdit}
          setCitaEdit = {setCitaEdit}
          showModal = {showModal}
          handleClose={handleClose}
        />
      })}
    </div>
  )
}

export default ListadoCitas