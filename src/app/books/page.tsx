import BookCard from '@/components/BookCard';
import { IBook } from '@/components/types/type';
import React from 'react'; 
// import { IBook } from './';
// import Image from 'next/image';
// import BookCard from './BookCard';
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
  <div> 
    <h3  className='text-center font-bold text-3xl my-3'>All Books</h3>
     <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container my-4 mx-auto px-4'>       
   {  
    
    booksData.map((book:IBook , ind:number)=>{  
      return(
        <> 
        <BookCard book={book} key={ind}/>
        </>
      )
     
    })

   }



     
   </section>
  </div>


  )
}
export default Books;  