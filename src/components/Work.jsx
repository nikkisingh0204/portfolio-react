import React from 'react'
import TVShow from '../assets/projects/tvShow.jpg'
import ToDo from '../assets/projects/todo.jpg'
import Foodorder from '../assets/projects/food-order.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my work</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grid item */}
          <div style={{backgroundImage: `url(${TVShow})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    TV Show Advisor React
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://react-tv-show-advisor-psi.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/nikkisingh0204/react-tv-show-advisor'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${ToDo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    To Do List React
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://to-do-list-react-sand-seven.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/nikkisingh0204/To-Do-List-React'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Foodorder})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Simple Food Order App
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://react-meals-rust.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/nikkisingh0204/react-meals'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Work