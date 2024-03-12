import React from 'react'
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div>
      <h1 >This is Body</h1>
      <Link to="/contact">contact</Link>
      <Link to="/about">About</Link>
      <Link to="/grocery">Grocery</Link>
    </div>
  )
}

export default Body
