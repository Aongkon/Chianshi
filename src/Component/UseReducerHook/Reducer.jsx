export const reducer = (state, action) => {

    if(action.type === "ADD"){
  
      const allBook = [...state.books , action.payload]
  
      return{
        ...state, books: allBook, isModalOpen: true, modalText: "Modal is open"
      }
    };
  
    if(action.type === "Remove"){
      const filteredBooks = [...state.books].filter(book => book.id !== action.payload);
  
      return {
        ...state,
        books: filteredBooks,
        isModalOpen: true,
        modalText: "Modal is removed"
      }
    }
  
    return state
  }
  