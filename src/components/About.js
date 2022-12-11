import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Yizhak! Please take a look around. Hope you Enjoy your Valued visit!</p>
            </div>
            <div>
              <p>I am a Full-Stack JavaScript Developer, with experience from the Intensive JavaScript and React Bootcamp at <u><a href="https://developers.institute/en/" target="_blank">Developers Institute</a></u>. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
