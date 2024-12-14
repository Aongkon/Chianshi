import React, { useState } from 'react';

const SecondForm = () => {

//useState er age 3 tar jonno 3 ar use korte hoyse ekhon 1 tar moddhey sombhob

    const [user, setUser] = useState({name: "", email: "", password: ""});
    const {name, email, password} = user;

    const  handleChange = (e) =>{

        setUser({...user, [e.target.name]:e.target.value})
    //     const filedName = e.target.name;

    //     if(filedName === "name"){
    //         setUser({name:e.target.value, email, password})
    //     };
    //    if(filedName === "email"){
    //         setUser({name, email: e.target.value, password})
    //     };
    //     if(filedName === "password"){
    //         setUser({name, email, password: e.target.value})
    //     };
    };

    const secondFormSubmit = (e) =>{
        console.log("trying to submit that");
        console.log(user)
        e.preventDefault()
    }

  return (
    <div id="main_div">
    <form action="" id="secondForm" onSubmit={secondFormSubmit}>

      <div id="input_field_first">
          <label htmlFor="name">Name: </label>
          <input
           type="text" 
           name="name"
           value={name}
           onChange={handleChange}
           >
           
           </input>
      </div>

      <div id="input_field_second">
          <label htmlFor="email">Email: </label>
          <input 
          type="email" 
          name="email" 
          value={email}
          onChange={handleChange}
          >
          </input>
      </div>

      <div id="input_field_third">
          <label htmlFor="password">Pass: </label>
          <input 
          type="password" 
          name="password" 
          value={password}
          onChange={handleChange}
          >
          </input>
      </div>
      
      <button type="submit" id="submitFirst">Submit</button>
    </form>
  </div>
  );
}

export default SecondForm;
