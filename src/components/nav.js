import React from "react"
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navColor d-flex">
          <Link className="navbar-brand navBrand" to={'/'}>
            Green Pepper
          </Link>
            <ul className="navbar-nav ml-auto navList">
              <li className="nav-item">
                <Link className="nav-link mr-3 navLink" to={'/menu'}>  
                    Menú
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-3 navLink" to={'/pedido'}>  
                    Pedido
                </Link>
              </li>
            </ul>
      </nav>
      
    </>
  )
}

export default Nav
