import {useState} from 'react'


function TodoInput ({getData}) {
    const [text,setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        getData(text)
    }
    
    return (
       <>
        <input className="form-control" placeholder="Type Something to add" onChange={handleChange}/>
        <button onClick={handleClick} >Add </button>
       </>
    )
}

export { TodoInput }