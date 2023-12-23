import { Tasks } from "./Tasks"
import "./App.css"

export default function List({todo, todoToggle, deleteTodo}) {

    return <ul className='list' type = "none"> 
    {todo.length === 0 && "No Tasks Added"}
    {todo.map(todo =>{
      return (
        <Tasks id ={todo.id} Completed={todo.Completed} title={todo.title} key ={todo.id}
        todoToggle={todoToggle} deleteTodo={deleteTodo}/>
        )
    })
    }
     
    </ul>
}