import { useState } from "react";

export default function ListItem({ itemData, setTodoList, todoList }) {
    console.log(todoList)
    function deleteTodo(id) {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    function validation(id) {
        const updatedTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, valid: true }; // Mettre à jour la propriété "valid" à true
            }
            return todo;
        });

        setTodoList(updatedTodoList); // Mettre à jour la liste complète avec les modifications
    }

    return (
        <li className={`p-2 bg-zinc-200 mb-2 rounded flex ${itemData.valid ? "bg-green-600" : ""}`}>
            <span>{itemData.content}</span>
            <div className="ml-auto">
                {itemData.valid ? null : (
                    <button onClick={() => validation(itemData.id)} className="bg-green-600 px-1 rounded text-zinc-200">
                        VALIDER
                    </button>
                )}
                <button onClick={e => deleteTodo(itemData.id)} className="ml-2 bg-red-600 px-1 rounded text-zinc-200">
                    Supprimer
                </button>
            </div>

        </li>
    )
}
