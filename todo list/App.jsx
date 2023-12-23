import { useState } from 'react'
import Form from "./Form.jsx"
import './App.css'
import List from './List.jsx'

export default function App(){
  const [todo,setTodo] = useState([])
  
  function addTodo(title) {
    setTodo(currentTodo =>{
      return [
        ...currentTodo,{
          id: crypto.randomUUID(), title,completed : false
        },
      ]
    })
  }
  function todoToggle(id,completed) {
    setTodo(currentTodo =>{
      return currentTodo.map(todo =>{
        if ( todo.id === id){
          return {...todo, completed}
        }
        return todo
        })
    })
  }
  function deleteTodo(id){
    setTodo(currentTodo =>{ 
      return currentTodo.filter(todo => todo.id !== id)
    })
  }
  return (
    <div className='to-do'>
    <h1>To-do List</h1>
    <Form onSubmit={addTodo}/>
    
    <List todo = {todo} todoToggle = {todoToggle} deleteTodo = {deleteTodo}/>
    
    </div>
  )
}
