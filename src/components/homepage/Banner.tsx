import Image from 'next/image';
import React from 'react'; 
import BannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-sky-100 via-indigo-50 to-purple-100 items-center border border-white/60 shadow-xl relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-300/30 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl pointer-events-none"></div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 z-10"> 
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800 leading-tight">
            Books to freshen up <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              your bookshelf
            </span>
          </h1> 
          <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Discover your next favorite read from our carefully curated collection of inspiring and best-selling books.
          </p>
          <div>
            <button className="btn btn-success text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200">
              View The List
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex justify-center items-center z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <Image 
              src={BannerImg} 
              alt="BannerImg" 
              className="relative rounded-2xl shadow-2xl max-h-[380px] w-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;