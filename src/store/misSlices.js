import { createSlice } from "@reduxjs/toolkit";

export const miSlice=createSlice({
    name: 'misTrabajadores',
    initialState: {
        trabajadores:[]
    },
    reducer:  {

    },
})

export const departamentosSlice=createSlice({
    name: 'misDepartamentos',
    initialState: {
        trabajadores:[]
    },
    reducer:  {
        agregarUnValor:(state,action)=>{
            state.trabajadores=[...state.trabajadores, action.payload]
        }
    },
})

export const { agregarUnValor} = miSlice.actions;