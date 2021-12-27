
function TodoList ({title,status,id,handleDelete}){
    const rupee = Math.floor(Math.random() * 100);
    return(
        <>
        <div className="list"> Grocery Name : {title}<button className="delete" onClick={()=>handleDelete(id)}>X</button></div>
        <h3>Amount-₹{rupee}</h3>
        </>
    )
}

export {TodoList}