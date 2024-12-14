import { reducer } from './Reducer';
import React, { useState, useReducer} from 'react';
import {v4 as uuidv4} from "uuid"

const booksData = [
  { id: 1, name: "Aongkon" },
  { id: 2, name: "Kongkon" },
  { id: 3, name: "Kohinur" }
]

const Modal = ({modalText}) => {
  return <p>{modalText}</p>
}

const initialState = {
  books: booksData,
  isModalOpen: false,
  modalText: ""
}


const UserReducer = () => {

  // const [books, setBooks] = useState(bookData)
  const [booksName, setBooksName] = useState("")
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [modalText, setModalText] = useState("")


  const [bookState, dispatch] = useReducer(reducer, initialState)


  const handleSubmit = (e) =>{
    e.preventDefault();
    const newBook = {id: uuidv4(), name: booksName};
    dispatch({type:"ADD", payload:newBook});



    // setBooks((prevState) =>{
    //   const newBook = {id: uuidv4(), name: booksName}

    //   return [...prevState, newBook]
    // })

    // setIsModalOpen(true);
    // setModalText("Modal text is open")
  }


  const removeBook = (id)=>{
    dispatch({type:"Remove", payload:id})
  }

  return (
    <div>
      
      <h2>Book List</h2>
      <br/><br/>

      <form onSubmit={handleSubmit}>
        <input type="text" value={booksName} onChange={(e)=>{setBooksName(e.target.value)}}></input>

        <br/><br/>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

        <button type="submit">Submit</button>
      </form>
        <br/><br/>


       {bookState.books.map((book) => {
        const {id, name} = book;
        return<li key={id}>{name} <button onClick={()=>{removeBook(id)}}>Remove</button></li>
       })}
    </div>
  );
}

export default UserReducer;
