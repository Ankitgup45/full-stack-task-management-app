import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>At our food delivery service, we prioritize customer satisfaction by providing quick, reliable, and high-quality deliveries. We understand the importance of fulfilling every order with care, ensuring that our customers receive fresh, delicious meals. Our commitment to excellent service means that we are always striving to improve and innovate, ensuring a seamless experience for all.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9004569262</li>
                    <li>ankitgupta3227@gmail.com@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 @Ankit-Food  - All  Right Reserved.</p>
    </div>
  )
}

export default Footer