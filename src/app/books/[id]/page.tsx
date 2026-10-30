import { IBook } from '@/components/types/type';
import React from 'react'; 

interface IBookDetailsPageProps { 
  params:Promise<{ 
    id:string
  }>;
}
const getBooks = async () => { 
  const res = await fetch("http://localhost:3000/booksData.json");
  const data= await res.json();
  return data;
} 

const BookDetailsPage = async({params}:IBookDetailsPageProps) => { 
   const {id} = await params; 
   const booksData = await getBooks();
   const book = booksData.find((book:IBook)=> book.bookId === parseInt(id));
  //  console.log(id,'id');
   console.log(book);
  return (
    <div>
     <h4 className='font-bold text-3xl text-center text-red-500'> 
       View Details  Loading ...
     </h4>
      
    </div>
  );
};

export default BookDetailsPage;