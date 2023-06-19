import React from 'react'
import './RegistroStyles.css'

const Registro  = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Registrate</span></h1>
                    <div>
                        <label>Usuario</label>
                        <input type="text" placeholder='Usuario deseado'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder='Mail de registro'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registro