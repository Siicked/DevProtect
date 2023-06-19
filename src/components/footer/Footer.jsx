import React from 'react'
import './FooterStyles.css'
import {SiDatabricks} from 'react-icons/si'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Footer = () => {
return (
    <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>DevProtect.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                
            <div className="col-container">
                <div className="col">
                    <h3>Navigation</h3>
                    <p>Inicio</p>
                    <p>Data</p>
                    <p>Nube</p>
                    <p>Contacto</p>
                </div>
                <div className="col">
                    <h3>Mi Cuenta</h3>
                    <p>Inicio</p>
                    <p>Data</p>
                    <p>Nube</p>
                    <p>Contacto</p>
                </div>
                <div className="col">
                    <h3>Informacion</h3>
                    <p>Inicio</p>
                    <p>Data</p>
                    <p>Nube</p>
                    <p>Contacto</p>
                </div>
                <div className="col">
                    <h3>Condiciones</h3>
                    <p>Inicio</p>
                    <p>Data</p>
                    <p>Nube</p>
                    <p>Contacto</p>
                </div>
                <form>
                    <h3>Trabaja con nosotros</h3>
                    <input type="email" placeholder='Ingresa tu mail de contacto...'/>
                    <FiMail className='mail-icon'/>
                <div className="social-group">
                    <a target='_blank' href="https://www.instagram.com/juan.berga02/"><FaInstagram className='social-icon'/></a>
                    <a target='_blank' href="https://twitter.com/SiickedLOL"><FaTwitter className='social-icon'/></a>
                    <a target='_blank' href="https://www.linkedin.com/in/juan-cruz-berga-ba775625b/"><FaLinkedin className='social-icon'/></a>
                    <a target='_blank' href="https://github.com/"><FaGithub className='social-icon'/></a>
                    
                </div>
                </form>
            </div>
            </div>
        </div>
)
}

export default Footer