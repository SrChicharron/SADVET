import React, {useState} from 'react'
import IconHome from '@assets/images/ImagotipoBlanco.svg'
import IconPet from '@assets/icons/dog.svg'
import IconUser from '@assets/icons/user-regular.svg'
import '@styles/ButtonNavBar.scss'


const ButtonNavBar = () => {
  return (
    
    <div className='container__buttonNavBar'>
      <div className='content__buttonNavBar'>
        <div className='container__iconUser containers__icons'>
          <img className='iconUser iconsbnb' src={IconUser}/>
        </div>
        <div className='container__iconHome containers__icons'>
          <img className='iconHome iconsbnb' src={IconHome}/>
        </div>
        <div className='container__iconPet containers__icons'>
          <img className='iconPet iconsbnb' src={IconPet}/>
        </div>
      </div>
      
    </div>
  )
}

export default ButtonNavBar