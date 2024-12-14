import React, { useState } from 'react';

const FirstForm = () => {


  const [name, setNameChange] = useState("");
  const [email, setEmailChange] = useState("");
  const [password, setPassChange] = useState("");


  const nameChangeHandler = (e) =>{
    setNameChange(e.target.value)
  }

  const emailChangeHandler = (e) =>{
    setEmailChange(e.target.value)
  }

  const passChangeHandler = (e) =>{
    setPassChange(e.target.value)
  }

  const formSubmitHandler = (e) =>{
    console.log("Submit Form")
    let userInfo = {name, email, password};
    console.log(userInfo);
    e.preventDefault()
  }


  return (
    <div id="main_div">
      <form action="" id="firstForm" onSubmit={formSubmitHandler}>

        <div id="input_field_first">
            <label htmlFor="name">Name: </label>
            <input
             type="text" 
             name="name" 
             onChange={nameChangeHandler} 
             value={name}>
             </input>
        </div>

        <div id="input_field_second">
            <label htmlFor="email">Email: </label>
            <input 
            type="email" 
            name="email" 
            onChange={emailChangeHandler}
            value={email}>
            </input>
        </div>

        <div id="input_field_third">
            <label htmlFor="password">Pass: </label>
            <input 
            type="password" 
            name="password" 
            onChange={passChangeHandler}
            value={password}>
            </input>
        </div>
        
        <button type="submit" id="submitFirst">Submit</button>
      </form>
    </div>
  );
}

export default FirstForm;
