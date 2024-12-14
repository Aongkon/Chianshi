import React, { useEffect, useState } from 'react';

const DataFetch = () => {

  const [todos , setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)


  useEffect(()=>{
    setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if(!res.ok){
          throw Error("Fetching is not okk")
        }
        else{
          return res.json()
        }
      })
      .then((data) =>{
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })

      .catch((error)=>{
        setError(error.message);
        isLoading(false);
      })


    }, 3000)
  }, [])

  const someData =todos && todos.map((dataStore) => {
    return(
      <p key={dataStore.id}>{dataStore.title}</p>
    )
  })


  return (
    <div>
    {error && <p>{error}</p>}
    {isLoading && <p>Main data is loading</p>}
     {someData}
    </div>
  );
}

export default DataFetch;
