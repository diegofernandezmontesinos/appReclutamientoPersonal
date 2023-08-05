/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Trabajador from './Trabajador'
import { eliminarUnValor, modificarUnValor } from '../store/misSlices';

export const Gestion = () => {
  const dispatch=useDispatch();

  const listaTrabajadores=useSelector(state => state.misTrabajadores.trabajadores );

  const actualizar = (continente, index)=> {
    dispatch(modificarUnValor(
      {
        indice: index,
        nuevoContinente:continente,
      }
    ))
  }
  const eliminar = (valor) => {
    dispatch(eliminarUnValor(
      {
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell

      }
    ))
  }




  return (
    <>
    <h1>Trabajadores</h1>
    <Link to='/candidatos'><button>Candidatos</button></Link>
    <div className="usuarios">
      {listaTrabajadores.map((valor, index) =>
      <Trabajador valor={valor} index={index} onActualizar={actualizar} onEliminar={eliminar} />
      )}
    </div>



    </>
  )
}

export default Gestion
