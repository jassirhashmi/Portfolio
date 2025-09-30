import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import { Link } from "react-scroll";   // 👈 react-scroll import

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" className='profile-img' />
            <h1><span>I'm Jassir Hashmi,</span> frontend developer From Pakistan.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatibus tenetur, quibusdam quos explicabo!</p>
            
            <div className="hero-action">
                {/* Smooth scroll connect button */}
                <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                    className="hero-connect"
                >
                    Connect with me
                </Link>

                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
