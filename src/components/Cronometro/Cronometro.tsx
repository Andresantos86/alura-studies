import Botao from "../Botao";
import Relogio from "./Relogio/Relogio";
import style from './Cronometro.module.scss'
import { Itarefa } from "../types/Itarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface CronometroProps{
    selecionado: Itarefa | undefined
    finalizarTarefa: ()=> void
}

export default function Cronometro({selecionado, finalizarTarefa}:CronometroProps){
    const [tempo, setTempo] = useState<number>()
   useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
   },[selecionado])

   // funcao recursiva para o contador 
   function contagemRegressiva(contador:number=0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1);
                return contagemRegressiva(contador -1)
            }
            finalizarTarefa()
        },1000)
   }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=> contagemRegressiva(tempo)}>Começar!</Botao>
        </div>
    )
}