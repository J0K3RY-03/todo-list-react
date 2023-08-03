import Form from '../components/Form'
import List from '../components/List'
import { nanoid } from 'nanoid'
import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([
    { id: nanoid(), content: 'item 1', valid: false }
  ])
  return (
    <div className='h-screen'>
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">Todo Liste</h1>
        <Form setInputText={setInputText} inputText={inputText} setTodoList={setTodoList} todoList={todoList} />
        <List setTodoList={setTodoList} todoList={todoList} />
      </div>
    </div>
  )
}


export default App
