import React, { useState } from 'react';
import ComponentSecond from './ComponentSecond';
import UserData from './UserData';

const todoData = ["aongkon" , "kongkon", "ratul"]


const ComponentFirst = () => {

  const [user, setUser] = useState(todoData);

  const newTodoHandler = (newTodo) =>{
    setUser([...user , newTodo])
  }

  return (
    <div>
        <UserData todoHandler={newTodoHandler}/>
       <ComponentSecond todoData = {user}/>
    </div>
  );
}

export default ComponentFirst;

