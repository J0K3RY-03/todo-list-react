import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from "react"

export default function Form({ setInputText, inputText, setTodoList, todoList }) {
    const [showValidation, setShowValidation] = useState(false);

    function handleInputText(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (inputText === '') {
            setShowValidation(true)
            return
        }

        setTodoList([...todoList, { id: nanoid(), content: inputText, valid: false }])
        setInputText('')
        setShowValidation(false)
    }

    return (
        <form onSubmit={handleSubmit} className="mb-10">
            <label htmlFor="todo-item"
                className="text-slate-50">Ajouter une chose à faire
            </label>
            <input onChange={handleInputText} value={inputText} type="text" className="mt-1 w-full block rounded" />
            {showValidation && <p className='text-red-400'>Veuillez renseigner une tâche à faire</p>}
            <button className="bg-slate-50 mt-4 rounded px-2 py-2 min-w-[115px]">Ajouter</button>
        </form>
    )
}