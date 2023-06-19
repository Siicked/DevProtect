import React, {useState} from 'react'
import './NavbarStyles.css'
import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div name='top' className='navbar'>
        <div className="container">
            <div className="logo">
                <SiDatabricks className='icon'/>
                <h1>DevProtect</h1>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/'>Inicio</Link></li>
                <li> <Link to='/proteccion'>Proteccion</Link></li>
                <li><Link to='/nube'>Tu Nube</Link></li>
                <li><Link to='/contactpage'>Contacto</Link></li>
                <button><Link to='/register'>Registrarse</Link></button>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar