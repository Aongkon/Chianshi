import React, { useState } from 'react'

const UserData = (props) => {

    const [todo, setTodo] = useState("");

   const todoChangeHandler = (e) =>{
     setTodo(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.todoHandler(todo)
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="todo">Todo Input :</label>
        <input type="text" name="todos" value={todo} onChange={todoChangeHandler}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserData
