import React from 'react'
import Logo from '../../assets/logo.png'


import './Header.css'

const header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'></img>
       <ul className='List'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us </li>
        <li>Plans</li>
        <li>Testimontials</li>
       </ul>
      

        
    </div>
  )
}

export default header