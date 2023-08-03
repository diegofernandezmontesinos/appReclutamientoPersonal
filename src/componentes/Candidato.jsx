import React from 'react'

export const Candidato = () => {
  return (
    <>
        <div className="usuario">
            <div className="foto">
                <img src={valor.picture.large} alt="" />
            </div>
            <div className="datos" >
              <div className="nombre" > {valor.name.title}</div>
            </div>
        </div>
    </>
  )
}

export default Candidato
