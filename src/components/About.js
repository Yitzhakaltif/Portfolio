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
              <p>I am a Full-Stack JavaScript Developer, with experience from the Intensive JavaScript and React Bootcamp at <u><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjQm6rsyfr5AhU9jWgJHfDBBQUYABAAGgJ3Zg&ohost=www.google.com&cid=CAESbOD2rnLbu6p0UZhI3dd2TKgWDVLPL1DIlCYFk_8SKoi1QJZk9nD4AqCh9wSkN4haKKVcktDsDTEkvCYWxC02gifAOV5B9rYkf7lgZmnLtJi_fblBUt71e7HDz6CkQp3YOlpQSHbgZ_j-1sLuMA&sig=AOD64_3pMVgHp8dtbsYzKABnsqHwqxxQnw&q&adurl&ved=2ahUKEwisraPsyfr5AhXZ0YUKHd_PBKgQ0Qx6BAgDEAE">Developers Institute</a></u>. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
