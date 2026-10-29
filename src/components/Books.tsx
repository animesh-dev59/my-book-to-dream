import React from 'react'; 
import { IBook } from './types/type';
import Image from 'next/image';
import BookCard from './BookCard';
// import BookCard from './BookCard';

const getBooks = async () => { 
  const res = await fetch("http://localhost:3000/booksData.json");
  const data= await res.json();
  return data;
} 
// console.log(getBooks);

const Books = async() => { 
  const booksData = await getBooks()
  console.log(booksData,'booksdata is a student');
  return( 
   <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4'>       
   { 
    booksData.map((book:IBook , ind:number)=>{  
      return( <BookCard book={book} key={ind}/>
     )
    })

   }



     
   </section>


  )
}
export default Books;  