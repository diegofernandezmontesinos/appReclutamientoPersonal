/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

export const miSlice=createSlice({
    name: 'misTrabajadores',
    initialState: {
        trabajadores:[]
    },
    reducer:  {
        agregarUnValor:(state,action)=>{
            state.trabajadores=[...state.trabajadores, action.payload]
        }
        },
        modificarUnValor:(state, action) => {
            const {indice, nuevoContinente} = action.payload;
            state.trabajadores[indice].departamento = nuevoContinente;
        },

        eliminarUnValor: (state, action) => {
            const {nombre, apellido,telefono} = action.payload;
            state.trabajadores = state.trabajadores.filter(valor => 
                valor.name.first !== nombre &&
                valor.name.last !== apellido &&
                valor.cell !== telefono)
        }



})

export const departamentosSlice=createSlice({
    name: 'misDepartamentos',
    initialState: {
        departamentos:["Spain","Venezuela","Portugal","France","Italy","United Kingdom", "United States", "Colombia", "South Africa", "Netherlands", "Germany", "Japan", "China", "Greece", "Lituania", "Belgium", "Senegal", "Argentina"]
    },
    reducer:  {
        
    }
})

export const { agregarUnValor} = miSlice.actions;
export const { modificarUnValor} = miSlice.actions;
export const { eliminarUnValor} = miSlice.actions;