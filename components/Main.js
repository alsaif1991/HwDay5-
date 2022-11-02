import React from 'react'

function Main() {
  return (
    <div className='main'> 
       <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
  </ul></div>
  )
}

export default Main