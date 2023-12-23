import React from 'react'
import { useState } from 'react'
import "./App.css"
export default function Form ({onSubmit}) {
    const [newTask,setNewTask] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if (newTask === "") return
      onSubmit(newTask)
      setNewTask("")

      }
  return (
    <form className="item-form" onSubmit={handleSubmit}>
    <label htmlFor="item">New Task</label>
    <input type="text" id ="task" value = {newTask} onChange={e =>setNewTask(e.target.value)}/>
    <button className="btn">Enter</button>
  </form>
  )
}
