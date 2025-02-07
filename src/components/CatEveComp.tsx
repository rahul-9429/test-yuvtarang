interface Props {
    Description: string;
    Name: string;
    url : string;   
    Img_url: string;
  }

import React from 'react'
import Image from 'next/image'
import Caltural from '../../public/assets/images/collage.png'
import CoverImg from '../../public/assets/images/Dance_cover.jpg'
// import CoverImg2 from '../../public/assets/images/kabaddi.JPG'
import Link from 'next/link';
import MagicButton from './Elements/MagicButton';
const CatEveComp : React.FC<Props> = ({ Description, Name, url,Img_url })  => {
  return (
    <div className="relative  rounded-lg bg-white w-[30%] min-h-[600px] flex flex-col items-center justify-center overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
      
  {/* Background Image */}
  <Image 
    src={`${Img_url}`} 
    alt="Caltural" 
    className="absolute align-top flex bottom-0  w-full h-full object-cover object-bottom" 
    layout="fill"
  />

  <div className="relative z-10 p-6 text-white flex flex-col h-full justify-between">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 via-transparent to-transparent"></div>

  {/* Content */}
  <span className="gap-4 relative">
    <h1 className='text-3xl font-bold'>{Name}</h1>
    <p className='line-clamp-3'>
   {Description}
    </p>
  </span>
  <Link href={`${url}`} className='z-[900]'>
 <MagicButton title='Compete' /> 
  </Link>
</div>

</div>

  )
}

export default CatEveComp