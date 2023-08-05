/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Candidato = ({valor, onBuscarUno, index, onGuardarUno}) => {
  return (
    <>
    
        <div className="usuario">
            <div className="foto">
                <img src={valor.picture.large} alt="" />
            </div>
            <div className="datos" >
              <div className="nombre" > {valor.name.title}.  {valor.name.first} {valor.name.last}</div>
              <div> Ubicacion: {valor.location.city} ({valor.location.country}) </div>
              <div> <a href="#"> {valor.email} </a></div>
              <div> <a href="#"> {valor.phone} </a></div>
            </div>
            <div className="botones">
                <button className="rojo" onClick={()=>onBuscarUno(index)}>Ocultar</button> 
                <button className="verde" onClick={()=>onGuardarUno(valor, index)}>Guardar</button>
            </div>
             
        </div>
    </>
  )
}

export default Candidato
