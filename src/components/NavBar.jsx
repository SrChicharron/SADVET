import React from 'react'
import '@styles/NavBar.scss'
import Logo from '@assets/images/ImagotipoTransparente.svg'
import User from '@assets/images/user.png'
import IconProduct from '@assets/icons/productoIcon.svg'
import HistoryIcon from '@assets/icons/history.svg'

const NavBar = () => {
  return (
    <nav className="container__navbar-home">
      <div className='content__navbar-home'>
        <div className="navbar__brand">
          <a href="#">
            <img className='logo__navbar' src={Logo}/>
          </a>
        </div>
        <div className="navbar__links">
          <img className="logoProd" src={HistoryIcon}/>
          <a className='ir_historial' href="/Historial">Historial</a>
        </div>
        <div className="navbar__links">
          <a className='cerrar__sesion' href="/recetas">Recetas</a>
          <h3 className='title__navbar'> Recetas </h3>
        </div>
        <div className="navbar__links">
          <img className="logoProd" src={IconProduct}/>
          <a className='ir_productos' href="/Productos">Productos/Servicios</a>
        </div>
        <div className="navbar__user">
          <div className='content__user'>
            <img className='user__navbar' src={User}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar