interface Props {
    Description: string;
    Name: string;
    url : string;   
  }

import React from 'react'
import Image from 'next/image'
import Caltural from '../../public/assets/images/collage.png'
import Link from 'next/link';
import MagicButton from './Elements/MagicButton';
const CatEveComp : React.FC<Props> = ({ Description, Name, url })  => {
  return (
    <div className="relative rounded-lg bg-white w-[30%] min-h-[500px] flex flex-col items-center justify-center overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
      
  {/* Background Image */}
  <Image 
    src={Caltural} 
    alt="Caltural" 
    className="absolute inset-0 w-full h-full object-cover" 
  />

  <div className="relative z-10 p-6 text-white flex flex-col h-full justify-between">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

  {/* Content */}
  <span className="gap-4 relative">
    <h1 className='text-2xl font-bold'>{Name}</h1>
    <p>
   {Description}
    </p>
  </span>
  <Link href={`${url}`}>
 <MagicButton title='Compete' /> 
  </Link>
</div>

</div>

  )
}

export default CatEveComp