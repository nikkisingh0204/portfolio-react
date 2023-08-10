import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
        <form action="https://getform.io/f/dee80ce2-e1da-4f54-ab4f-96e7e46cbbec" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - 26singhnikki@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="NAME" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='EMAIL' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='MESSAGE' ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hoer:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contacts