import React from 'react'
import ItemListPet from '@components/ItemListPet'
import useMascota from '@hooks/useMascotas'
import '@styles/ListadoPets.scss'

const ListadoPets = ( { mascotaEdit, setMascotaEdit, showModal, handleClose } ) => {
  const url = 'http://srchicharron.com:8080/dancing-queen/citas/getallcitas';

  const mascotasResponse = useMascota.useGetMascotas(url);

  return (
    <div>
      {mascotasResponse.map((mascota) => {
        return <ItemListPet
          key = {mascota.id}
          idMascota = {mascota.id}
          mascota = {mascota}
          mascotaEdit = {mascotaEdit}
          setMascotaEdit = {setMascotaEdit}
          showModal = {showModal}
          handleClose={handleClose}
        />
      })}
    </div>
  )
}

export default ListadoPets