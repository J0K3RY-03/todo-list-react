import { nanoid } from "nanoid";
import ListItem from "./ListItem"
import { useState } from "react"

export default function List({ setTodoList, todoList }) {

    return (
        <ul>
            {todoList.length === 0 && <li className="text-slate-50 text-md">Pas de tâche à afficher</li>}
            {todoList.length > 0 && todoList.map(item => (
                <ListItem key={item.id} itemData={item} setTodoList={setTodoList} todoList={todoList} />
            ))}
        </ul>
    )
}
