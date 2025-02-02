import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1f242d] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/nbdodjya" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-2xl sm:text-4xl font-bold inline border-b-4 border-[#0ef0ef] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - ubaidwani133@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#0ef0ef] hover:border-[#0ef0ef] px-3 py-2 sm:px-4 sm:py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact