import "./App.css"
export function Tasks({Completed , title, id, todoToggle, deleteTodo}){
    return  <li key ={id} className="item">
    <input type ="checkbox" id ="task" 
    checked= {Completed} 
    onChange={
        e=> todoToggle(id, e.target.checked)}/>
    {title} 
    <button className="btn btn-danger" 
     onClick = {()=> deleteTodo(id)}>X</button>
  </li>
}