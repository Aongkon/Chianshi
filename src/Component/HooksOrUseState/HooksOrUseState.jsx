import React, { useState } from 'react'
import Button from "react-bootstrap/Button";


const HooksOrUseState = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () =>{
        // setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    const [name, setName] = useState("");
    const aongkonHandle = () =>{
      setName("Aongkon");
    }
    const kongkonHandle =()=>{
      setName("Kongkon");
    }
    const ratulHandle= () =>{
      setName("Ratul");
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleIncrement}>Click</Button>

      <h2 style={{ marginTop:"50px" , marginLeft:"40px" }}>User Name : {name}</h2>
      <div style={{ marginTop:"30px" , marginLeft:"40px", marginBottom: "100px"}}>
      <Button onClick={aongkonHandle}>Aongkon</Button>
      <Button onClick={kongkonHandle}>Kongkon</Button>
      <Button onClick={ratulHandle}>Ratul</Button>
      </div>
    </div>
  )
}

export default HooksOrUseState;
