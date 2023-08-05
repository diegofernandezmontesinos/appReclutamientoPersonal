/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Trabajador from './Trabajador'

export const Gestion = () => {
  const listaTrabajadores=useSelector(state => state.misTrabajadores.trabajadores )
  return (
    <>
    <h1>Trabajadores</h1>
    <Link to='/candidatos'><button>Candidatos</button></Link>
    <div className="usuarios">
      {listaTrabajadores.map((valor, index) =>
      <Trabajador valor={valor} index={index}/>
      )}
    </div>



    </>
  )
}

export default Gestion
