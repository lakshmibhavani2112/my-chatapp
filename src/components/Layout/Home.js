import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Header/>
        <section>
          <div className='bg-gray-200 mt-2 rounded-lg h-96'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-5xl mt-16'>Welcome to React-Chat</h1>
              <p className='text-lg mt-2'>A great place to share your thoughts with friends :-)</p>
              <div className='mt-4 py-8'>
                <Link to="/signup" className='border-none rounded-md bg-blue-600 text-white font-bold p-3 mr-3'>Create New Account</Link>
                <Link to="/login" className='border-none rounded-md bg-blue-600 text-white font-bold p-3 mr-3'>Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Home