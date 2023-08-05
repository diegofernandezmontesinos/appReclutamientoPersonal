/* eslint-disable no-unused-vars */
import React from 'react'

export const Trabajador = (valor, index) => {
  return (
    <>
    <div className='columna'>
        <div className='fotoUsuario' >
            <img  src={valor.picture.large} alt=''></img>
        </div>
        <div className='nombreUsuario'>
            <strong>
                {valor.name.last}, {valor.name.first}
            </strong>

        </div>
        <div>
            {valor.location.city}
        </div>
        <div>
            ({valor.location.country})
        </div>


    </div>

    </>
  )
}

export default Trabajador;
