import React from 'react'

export default function Footer () {
  return (
    <>
        <div className='flex flex-wrap justify-center container p-12 border-t-2 border-gray-800 mt-9'>
            <div className=' md:w-1/5 w-full text-center mb-5'>
                <h1 className='mb-2'>Movies</h1>
                <h1 className='my-2'>Series</h1>
                <h1 className='my-2'>Top IMDb</h1>
                <h1 className='my-2'>Profile</h1>
            </div>
            <div className='md:w-1/5 w-full text-center mb-5 '>
                <h1 className='mb-2'>Movies</h1>
                <p className='text-gray-500'>Gerne</p>
                <p className='text-gray-500'>Year</p>
                <p className='text-gray-500'>Trend</p>
                <p className='text-gray-500'>Upcomming</p>
                <p className='text-gray-500'>Watchlist</p>
            </div>
            <div className='md:w-1/5 w-full text-center mb-5 '>
                <h1 className='mb-2'>Series</h1>
                <p className='text-gray-500'>Gerne</p>
                <p className='text-gray-500'>Year</p>
                <p className='text-gray-500'>Trend</p>
                <p className='text-gray-500'>Upcomming</p>
                <p className='text-gray-500'>Watchlist</p>
            </div>
            <div className='md:w-1/5 w-full text-center mb-5 '>
                <h1 className='mb-2'>Support</h1>
                <p className='text-gray-500'>FAQ</p>
                <p className='text-gray-500'>Terms & Service</p>
                <p className='text-gray-500'>Site Map</p>
                <p className='text-gray-500'>Privacy & Policy</p>
            </div>
            <div className='md:w-1/5 w-full text-center mb-5 '>
                <h1 className='mb-2'>Connect With Us</h1>
                <ul className='flex gap-3 justify-center'>
                    <li><i className="fa-brands fa-instagram" style={{color: '#ffffff'}} /></li>
                    <li><i className="fa-brands fa-facebook" style={{color: '#ffffff'}} /></li>
                    <li><i className="fa-brands fa-x-twitter" style={{color: '#ffffff'}} /></li>
                </ul>
            </div>
        </div>
    </>
  )
}
