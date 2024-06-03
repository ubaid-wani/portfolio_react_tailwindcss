import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import img from "../assets/img.jpg"

const Home = () => {
  return (
    <section name='home' className='bg-[#1f242d]'>
    <div className=' md:mx-[160px] h-screen  pt-[45%] sm:p-0 grid md:grid-cols-2'>

      {/* .............................summary...Container.................... */}
      <div className='order-2 md:order-1 mdmax-w-[1000px] p-6 md:p-0 mx-auto flex flex-col justify-center h-full'>
        <p className='text-[#0ef0ef]  text-1xl md:text-3xl font-bold' >Hi, my name is</p>
        <h1 className=' text-1xl md:text-6xl font-bold text-[#ccd6f6]'>
          Ubaid Ashraf
        </h1>
        <h2 className='text-1xl md:text-7xl font-bold text-[#8892b0]'>
          I'm a 
          <span className='text-[#0ef0ef] '> Front-End Developer. </span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-xs font-medium sm:text-sm ">
         Dedicated Front-End Developer with 1 year of experience specializing in building user interfaces
         using modern web technologies. Proficient in React.js and its ecosystem, with a strong
         understanding of JavaScript, HTML, and CSS. Passionate about creating responsive and intuitive
         web applications that enhance user experience.

        </p>
        <div>
          <button className='px-2 py-0 text-white group border-2 md:px-6 md:py-3 my-2 flex items-center hover:text-[#0ef0ef] hover:border-[#0ef0ef]'>
          <Link to='work' smooth={true} duration={500}>
           <span className=' font-black text-xs md:text-1xl'>  View Work </span>
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
       {/*............................... image........................... */}
      
      <div className='order-1 md:order-2 mb-10 md:mb-0 flex justify-center items-center relative'>
          
          <div className='  w-[70%] md:w-[80%] md:h-[80%] bg-[#0ef0ef] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' 
           style={{clipPath:'circle(42%)'}}>      
        
                  <img src={img} alt='Logo Image' className='w-[60%] md:w-[85%]' style={{position:'absolute' ,top:'50%' ,left:'50%',
                  transform:"translate(-50%,-50%)",clipPath:'circle(50%)'}}/>
          </div>

      </div>


    </div>
    </section>
  );
};

export default Home;
