import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-Main flex flex-col gap-5 justify-center py-5'>
      
      <div className='text-white font-semibold flex gap-4 justify-center'>
        <Link className='hover:text-gray-300' to='/'> Home </Link>
        <Link className='hover:text-gray-300' to='/pokemon'> Pokemon </Link>
        <Link className='hover:text-gray-300' to='/item'> Items </Link>
        <Link className='hover:text-gray-300' to='/berry'> Berries </Link>
      </div>
      
      <h5 className='text-white opacity-50'>
        Created by <a className='hover:text-gray-300' href='https://www.linkedin.com/in/moechtarwira/' target='_blank' rel='noreferrer noopener'>
          Moechtar Wira
        </a>
      </h5>
    </div>
  )
}

export default Footer