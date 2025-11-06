import { createContext } from "react";
import { DatosDeJuego } from "../Models/DatosDeJuego";

export const JuegoContext= createContext({
    cantidadPartidas: [] as DatosDeJuego[],
    sumarPartida: (partida: DatosDeJuego)=>{},
    cartas: [] as string[]
})