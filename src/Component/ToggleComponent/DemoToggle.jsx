import React, { useState } from 'react';

const DemoToggle = () => {

    const [Toggle, setToggle] = useState(true)

    const showHandle = () =>{
        setToggle(!Toggle)
    }

  return (
    <div  style={{
        background: "pink",
        color: "black",
        fontSize: "16px",
        padding: "20px",
        margin: "50px"
      }}>
      <h1>Demo Toggle</h1>
      {Toggle &&  <p>These are questions that we ask each other every single day. I’m sure
        you ask these questions to your loved ones too. So we decided to create
        a fun Travel Portfolio game out of it. All 700+ team members at our
        offices have already played this game.</p>}
     

        <buttom
          onClick={showHandle}
          style={{
            background: "red",
            color: "black",
            fontSize: "14px",
            padding: "10px 30px",
            marginRight: "20px",
            border: "none",
            cursor: "pointer",
          }}>{Toggle? "Hide":"Show"}</buttom>
    </div>
  );
}

export default DemoToggle;
