
import { useState } from "react";


function ToDoList(){
    const[tasks , setTasks] = useState([]);
    const[newtasks , setNewTasks] = useState("");
    

    let handleInputChange = (event)=> {
            setNewTasks(event.target.value);
    }

    
    let addTasks = ()=> {

        if(newtasks.trim() !== "") {
            setTasks(t => [...t, newtasks]);
        setNewTasks("");
        }
        
    }
    
    let deleteTasks = (index)=> {
            const updatedFunction = tasks.filter((_ , i ) => i !== index);
            setTasks(updatedFunction); 
    }
    
    let moveTaskUp = (index)=> {

        if(index > 0 ){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1 ],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    let moveTaskDown = (index)=> {
        if(index  < tasks.length -  1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1 ],updatedTasks[index]];
                setTasks(updatedTasks);
            }
    }
    
return(

    <>
        <div className="to-do-list">
                <h1>TO Do List App</h1>
                <input type="text" value={newtasks} placeholder="Enter a New Task..." onChange={handleInputChange}/>                    
                <button className="add-button" onClick={addTasks}> Add</button>

                <ol>
                    {tasks.map((task , index)=> 

                        <li className="text" key={index}> <span className="text" >{task}</span> 
                        <button className="delete-button" onClick={()=>deleteTasks(index)}>Delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}>Up </button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                </ol>
        </div>
    </>
)


}

export default ToDoList;