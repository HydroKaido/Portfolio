import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-red-500 text-white py-5'>
      <div className='flex justify-between mx-5'>
        <ul>
          <li>asdfasdf</li>
        </ul>
        <ul className='flex'>
          <li className='mx-3'><Link to={'/home'}>Home</Link></li>
          <li className='mx-3'><Link to={'/about'}>About</Link></li>
          <li className='mx-3'><Link to={'/project'}>Project</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header