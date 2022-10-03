import React, { useState } from "react"
import { Itarefa } from "../types/Itarefa"
import Item from "./Item/Item"
import style from './lista.module.scss'

interface ListaProps {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}
export default function Lista ({tarefas,selecionaTarefa}: ListaProps)  {
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    selecionaTarefa = {selecionaTarefa}
                    key={item.id}
                        {...item}
                    />
                ))}
               
            </ul>
        </aside>
    )
}