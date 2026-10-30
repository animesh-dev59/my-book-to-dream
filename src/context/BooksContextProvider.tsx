'use client'
import React, { createContext,  useState } from 'react';
export const BooksContext = createContext({})
const BooksContextProvider = ({children}:{children:React.ReactNode}) => {   

  const [readBooks , setReadBooks] = useState([]);
  const [whishlist,setWhistList] = useState([])  

  const sharedData = { 
    readBooks , setReadBooks , whishlist , setWhistList
  }
  return (<BooksContext.Provider value={sharedData}> 
    {children}
  </BooksContext.Provider>
  );
};

export default BooksContextProvider;