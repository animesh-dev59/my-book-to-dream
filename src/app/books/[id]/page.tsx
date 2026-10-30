import ReadButtons from '@/components/BookDetails/ReadButtons';
import { IBook } from '@/components/types/type';
import Image from 'next/image';
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
   const book = booksData.find((book:IBook)=> book.bookId === parseInt(id)) as IBook;
  //  console.log(id,'id');
   console.log(book); 
  return (
//      <div  className='container mx-auto'>   
//        <div className="card lg:card-side bg-base-100 shadow-sm flex justify-between">
//   <figure>
//     <Image
//       src={book.image}
//       alt={book.bookName}
//       fill 
//       className='w-auto h-300 object-center'
      
//       />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{book.bookName}</h2>
//       <p>{book.publisher}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Listen</button>
//     </div>
//   </div>
// </div>
//      </div>


      <div className="container mx-auto px-4 py-8">
  <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl">
    
    {/* Book Cover Image */}
    <figure className="bg-base-200/50 p-8 flex items-center justify-center">
      <Image
        src={book.image}
        alt={book.bookName}
        width={300}
        height={400}
        className="rounded-xl shadow-lg object-cover max-h-[450px] w-auto transition-transform duration-300 hover:scale-105"
        priority
      />
    </figure>

    {/* Book Information Body */}
    <div className="card-body p-6 lg:p-8 flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Category & Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge badge-primary badge-outline font-semibold">
            {book.category}
          </span>
          {book.tags?.map((tag, index) => (
            <span key={index} className="badge badge-secondary badge-soft">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <div>
          <h1 className="card-title text-3xl font-bold text-base-content">
            {book.bookName}
          </h1>
          <p className="text-base-content/70 font-medium text-lg mt-1">
            By <span className="text-primary font-semibold">{book.author}</span>
          </p>
        </div>

        <div className="divider my-1"></div>

        {/* Rating & Core Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-base-200/40 p-4 rounded-xl border border-base-200 text-sm">
          <div>
            <span className="text-xs text-base-content/60 block">Rating</span>
            <div className="flex items-center gap-1 font-semibold text-amber-500 mt-0.5">
              <span>★</span> {book.rating} / 5
            </div>
          </div>
          <div>
            <span className="text-xs text-base-content/60 block">Pages</span>
            <span className="font-semibold text-base-content">{book.totalPages} Pages</span>
          </div>
          <div>
            <span className="text-xs text-base-content/60 block">Published</span>
            <span className="font-semibold text-base-content">{book.yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher */}
        <p className="text-sm text-base-content/80">
          <span className="font-semibold text-base-content">Publisher:</span> {book.publisher}
        </p>

        {/* Overview / Review */}
        <div>
          <h3 className="font-semibold text-base-content mb-1">Review & Overview</h3>
          <p className="text-sm text-base-content/70 leading-relaxed line-clamp-6 hover:line-clamp-none transition-all">
            {book.review}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="card-actions justify-end gap-3 mt-6 pt-4 border-t border-base-200">
        <ReadButtons book={book}/>
        <button className="btn btn-primary rounded-xl px-6 shadow-md shadow-primary/20 hover:text-blue-900 hover:bg-white">
          Wishlist
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default BookDetailsPage;