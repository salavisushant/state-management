import {TodoInput} from "./GroceryInput"
import {TodoList} from "./GroceryList"
import {nanoid} from "nanoid"
import {useState} from "react"

export const Todo =()=>{
    const [list,setList]  = useState([]);

    const handleClick = (data) => {
        const payload = {
            title:data,
            status:false,
            id:nanoid(7),
        };
        setList([...list, payload]);
    };

    const handleDelete = (id) => {
        setList(list.filter(list => list.id !== id));
    }

  
    return(
        <div>
            <h1 className="todo">Grocery Management List</h1>
            <TodoInput getData = {handleClick}/>
            {list.map((e)=>(
                <TodoList key={e.id} {...e}
                handleDelete={handleDelete}
                />
            ))},
        </div>
    )
}

