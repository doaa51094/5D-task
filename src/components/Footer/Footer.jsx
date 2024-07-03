import React from 'react'
import social from'../../assets/Social Networks.png'
import Patron10 from'../../assets/Patron de Puntos10.png'
import Patron9 from'../../assets/Patron de Puntos9.png'
const Footer = () => {
  return (
    <div className='mt-10  bg-[#edeeff] rounded-t-[20px] py-8 flex justify-center items-center relative w-full'>
       <div className='lg:w-[20%]  w-[50%]  mx-auto text-center'>
        <img src={social} alt="social media" className='w-full'/>
        <p className='text-[#5F6073] pt-5'>Hassan Abu Ali © 2022</p>
        </div> 
        <div><img src={Patron9} alt="Patron" className="absolute top-10 right-0 lg:w-12 w-10"/></div>
        <div><img src={Patron10} alt="Patron" className="absolute bottom-2 left-0 lg:w-16 w-14"/></div>

    </div>
  )
}

export default Footer