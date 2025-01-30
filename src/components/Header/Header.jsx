import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img}  />
        <div className='header-contents'>
            <h2>Order your favourite food here.</h2>
            <p> our food delivery service, we prioritize customer satisfaction by providing quick, reliable, and high-quality deliveries. We understand the importance of fulfilling every order with care, ensuring that our customers receive fresh, delicious meals. Our commitment to excellent service means that we are always striving to improve and innovate, ensuring a seamless experience for all.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header