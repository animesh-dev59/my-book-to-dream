"use client"
import React, { useContext } from 'react';
import { IBook } from '../types/type';
import BooksContextProvider, { BooksContext } from '@/context/BooksContextProvider';


const ReadButtons = ({book}:{book:IBook}) => { 
  const {readBooks , setReadBooks} = useContext(BooksContext)
  const handleReadBook = ()=> { 
//  console.log('read book btn triger',book)
 setReadBooks([...readBooks ,book]);
 alert(`You have read "${book.bookName}"`)
}
  return <button
  onClick={()=>handleReadBook()}
   className="btn btn-outline btn-primary rounded-xl px-6">
          Read
        </button>;
};

export default ReadButtons;