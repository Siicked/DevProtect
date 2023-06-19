import React from 'react'
import "./HeroStyles.css"
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='content'>
          <h1>Cuida tus</h1>
          <h1>Datos con</h1>
          <h1 className='blue'>DevProtect</h1>
          <div>
          <Link activeClass="active" to="data12" spy={true} smooth={true} duration={500}>
          <button>Saber mas!</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero