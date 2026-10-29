import Image from 'next/image';
import React from 'react'; 
import BannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
  return (
    <div className='grid grid-cols-2 gap-4 bg-sky-100 items-center container mx-auto'> 
      <div className='text-center'> 
        <h2 className='font-bold text-5xl '>Books to freshen up <br />
        your bookshelf</h2> 
        <button className='btn btn-success my-3'>View The List</button>
      </div>
      <Image src={BannerImg} alt='BannerImg'/>
    </div>
  );
};

export default Banner;