import React, { useEffect, useState } from 'react'

const Listado = () => {
    const [candidatos, setCandidatos] = useState([])

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=6")
        .then((response) => response.json())
        .then((datos) => setCandidatos(datos.results))
    }, [])
    return (
        <>
            {candidatos.map((valor,index)=>
            <div>
                {valor.name.first}
            </div>)}
        </>
    )
}

export default Listado