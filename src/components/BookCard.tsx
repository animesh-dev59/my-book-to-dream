import React from 'react'; 
import { IBook } from './types/type';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({book}:{book:IBook}) => {
  return (
    <div className="card bg-base-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Book Image Container */}
                <div className="bg-slate-100/80 rounded-2xl p-6 flex justify-center items-center h-64 mb-6 relative overflow-hidden group-hover:bg-slate-200/60 transition-colors">
                  <div className="relative w-36 h-48 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={book.image} 
                      alt={book.bookName}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags?.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="badge badge-success badge-soft text-emerald-600 bg-emerald-50 font-medium px-4 py-3 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book Title */}
                <h3 className="font-bold text-2xl text-slate-800 line-clamp-1 mb-1 group-hover:text-emerald-600 transition-colors">
                  {book.bookName}
                </h3>

                {/* Author Name */}
                <p className="text-slate-500 font-medium text-sm mb-4">
                  By : {book.author}
                </p>

                {/* Dashed Divider Line */}
                <div className="border-t border-dashed border-slate-300 my-4"></div>
              </div>

              {/* Card Footer: Category & Rating */}
              <div className="flex justify-between items-center text-slate-500 text-sm font-medium">
                <span>{book.category}</span>
                
                <div className="flex items-center gap-1.5">
                  <span>{book.rating.toFixed(2)}</span>
                  {/* Star Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-slate-400 group-hover:text-amber-400 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                    />
                  </svg>
                </div>
              </div> 
            
              <Link href={`/books/${book.bookId}`} className='btn btn-success mt-2 rounded-3xl hover:text-black hover:font-bold '>View Details
            </Link>
               
            </div>
  );
};

export default BookCard;