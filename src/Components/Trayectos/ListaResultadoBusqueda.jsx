import React from 'react'
import ListCardTrayectoSearch from './ListCardTrayectoSearch'

export default function ListaResultadoBusqueda({resultados}) {
  return (
      <div>
                <h2>Resultados:</h2>
                <ListCardTrayectoSearch listTrayectos={resultados}/> 
            
        </div>
  )
}
