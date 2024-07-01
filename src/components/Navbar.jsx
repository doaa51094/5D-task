import React from 'react'
import userImg from '../assets/Morado.png'
const Navbar = () => {
  return (
    <div className='w-full flex justify-center my-9'>
<nav className='flex justify-between items-center bg-[#1B1C37] w-[90%] h-14 px-12 rounded-[10px]'>
<div className='flex gap-1 text-white font-medium text-[17px] leading-6'>
    <img src={userImg} alt='user img' className='w-[30px] pe-1'/>  
    Hassan Abu Ali
</div>
<div className='text-white '>
    <ul className='flex space-x-4'>
        <li>
            Home
        </li>
        <li>
            Skills
        </li>
        <li>
            Portfolio
        </li>
        <li>
            Blog
        </li>
    </ul>
</div>
<div >
    <button className='font-medium text-[17px] leading-6 bg-[#7579FF] text-white rounded-[8.5px] px-4 py-1.5'>Contact Me</button>
</div>
</nav>
    </div>  
  )
}

export default Navbar