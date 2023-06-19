import React from 'react'
import './ContactStyles.css'

const Contacto = () => {
return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contactanos</span></h1>
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder='Ingresa tu nombre'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Ingresa tu E-Mail'/>
                    </div>
                    <div>
                        <label>Mensaje</label>
                        <textarea rows='10' placeholder='Ingresa tu mensaje'/>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacto