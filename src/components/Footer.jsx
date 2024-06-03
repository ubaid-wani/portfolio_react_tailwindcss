import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>

<section className=" bg-[#1f242d]">
        <hr className=" border-gray-800" />
        {/* social media links  */}
         
        <div className=' md:hidden'>
        <ul className='px-10 flex justify-between items-center'>
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center hover: duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/ubaidwani1/"
            >
           <FaLinkedin />
            </a>
          </li>
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center  hover: duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ubaid-wani'
            >
          <FaGithub />
            </a>
          </li>
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center  hover: duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-center
               items-center w-full text-gray-300'
              href="mailto:ubaidwani133@gmail.com"
            >
          <HiOutlineMail />
            </a>
          </li>
          <li className='w-[50px] h-[50px] rounded-full flex justify-center items-center  hover: duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='ubaid.pdf' download='ubaid.pdf'
            >
            <BsFillPersonLinesFill  />
            </a>
          </li>
        </ul>
      </div>
  

{/* namess of author */}
        <div className="flex flex-wrap md:flex-nowrap md:flex-column items-center justify-center">
        <h3 className="w-full text-sm mt-4 py-2 sm:text-m text-center  text-gray-100 sm:pt-4 md:p-0 lg:py-6 ">Sringar &#183; Jammu and Kashmir &#183; India </h3>
        <h4 className="w-full text-sm mx-2 sm:text-m text-center  text-gray-100 sm:pt-4 lg:py-6 md:p-0 ">+917006929877</h4>
        <p className="w-full text-sm mx-2 py-2 my-2 sm:text-m text-center  text-gray-100 sm:pt-4  md:px-0">© Copyright 2024, All Rights Reserved by Ubaid Ashraf</p>
        </div>
</section>

    </>
  )
}

export default Footer

