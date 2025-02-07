
import React from 'react'
import CatEveComp from './CatEveComp'
const Cat_Events = () => {
  return (
    <section id="#events" className="flex flex-col justify-center items-center py-10 bg-gray-500">
         <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Events</h2>
    <div className='w-screen flex px-4 gap-20 flex-row sm:flex-col justify-center'>
        <CatEveComp 
        Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati repellat odio, error numquam atque praesentium cupiditate aliquam hic quam, non corporis distinctio suscipit doloremque iure ea harum quisquam amet. " 
        Name="Caltural"
        url="/Event/Culturals"
        />
        <CatEveComp Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati repellat odio, error numquam atque praesentium cupiditate aliquam hic quam, non corporis distinctio suscipit doloremque iure ea harum quisquam amet."  
        Name="sports"
        url="/Event/Culturals"
        />
    </div>
    </section>
  )
}

export default Cat_Events
