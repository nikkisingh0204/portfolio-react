import React from 'react'

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
                        <p>Hi , I am Nikki , nice to meet you . Please take a look.</p>
                    </div>
                    <div>
                       <p> Leveraging a keen eye for design aesthetics and a solid understanding of the latest UI trends and best practices 
                        to craft engaging digital experiences. 
                        Adept at collaborating with cross-functional teams to ensure seamless integration 
                        of design and technology. Continuously exploring new tools and techniques 
                        to enhance user interaction and elevate overall user satisfaction. Eager to contribute innovative solutions and 
                        contribute to creating intuitive and visually striking applications that resonate with users.
</p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;
