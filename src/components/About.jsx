import React from 'react';

const About = () => {
  return (
    <section>
    <div name='about' className='w-full h-screen bg-[#1f242d] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-[#0ef0ef]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-2xl sm:text-right sm:text-4xl font-bold'>
              <p>Hi. I'm Ubaid Ashraf, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
    </section>
  );
};

export default About;
