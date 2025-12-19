import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import { Link } from "react-scroll";   // 👈 react-scroll import
import resume from '../../assets/resume.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" className='profile-img' />
            <h1><span>I'm Jassir Hashmi,</span> frontend developer From Pakistan.</h1>
            <p>I create modern, responsive, and user-friendly web applications using the latest frontend technologies. Passionate about turning ideas into interactive digital experiences and constantly learning to craft clean, efficient, and scalable code.</p>
            
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
                <a href={resume} download>
                    <button  className="hero-resume">My resume</button>
                </a>
            </div>
        </div>
    )
}

export default Hero
