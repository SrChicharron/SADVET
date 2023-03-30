import React from 'react' 
import NavBar from '@components/NavBar'
import ButtonNavBar from '@components/ButtonNavBar'
import FormCitas from "@containers/FormCitas"
import ListadoCitas from "@containers/ListadoCitas"
import '@styles/Home.scss'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='container__citas'>
        <div className='content__titleCitas'>
          <h3 className='title__citas'>ADMINISTRADOR DE CITAS</h3>
        </div>

        <div className='body__content'>
          <div className='content__formCitas'>
            <FormCitas />
          </div>
          <div className='content__listCitas'>
            <ListadoCitas />
          </div>
        </div>
      </div>
      <ButtonNavBar />
    </div>
  )
}

export default Home