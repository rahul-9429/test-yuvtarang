
import React from 'react'
import CatEveComp from './CatEveComp'
const Cat_Events = () => {
  return (
    <section id="events" className="flex flex-col justify-center items-center py-10">
         <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Event Categories</h2>
         <p className='font-semibold text-2xl mb-9'>Explore the diverse range of events at Yuvtarang '25</p>
    <div className='w-screen flex px-4 gap-20 flex-row sm:flex-col justify-center'>
        <CatEveComp 
        Description="Immerse yourself in a world of artistic expression, mesmerizing performances, and creative brilliance at our cultural extravaganza! From soulful music to electrifying dance, experience the magic of talent and passion coming to life!" 
        Name="Culturals"
        url="/culturals"
        Img_url="https://raw.githubusercontent.com/rahul-9429/yuvtarang-2025/blob/master/public/assets/images/Dance_cover.jpg"
        />
        <CatEveComp Description="Unleash your competitive spirit and showcase your athletic prowess at our thrilling sports events! From intense matches to exhilarating victories, get ready to experience the ultimate battle of skill, strategy, and sportsmanship!"  
        Name="Sports"
        url="/sports"
        Img_url="https://raw.githubusercontent.com/rahul-9429/yuvtarang-2025/blob/master/public/assets/images/kabaddi.JPG"

        />
    </div>
    </section>
  )
}

export default Cat_Events
