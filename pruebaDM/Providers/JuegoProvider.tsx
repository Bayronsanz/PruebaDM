import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { JuegoContext } from '../context/JuegoContext'
import { DatosDeJuego } from '../Models/DatosDeJuego';

interface Plantilla {
    children: ReactNode
}

export default function JuegoProvider({ children }: Plantilla) {

    const [cartas, setCartas]= useState<string[]>(['A','B','C','D','A','B','C','D']);
    const [cantidadPartidas, setCandidadPartidas]= useState<DatosDeJuego[]>([]);

    function sumarPartida(item:DatosDeJuego){
        setCandidadPartidas([...cantidadPartidas, item])
    }

    return (
        <JuegoContext.Provider value={{cartas,cantidadPartidas, sumarPartida}}>
            {children}
        </JuegoContext.Provider>
    )
}

export function useJuegoContext(){
    return useContext(JuegoContext)
}