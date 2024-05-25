import { useState } from "react";

function Counter (){
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRemove = ()=>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{
        border:"2px solid blue",
        borderRadius:"10px",
        margin:"10px",
        padding: "10px"

        }}>
            <h3>counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Counter;
