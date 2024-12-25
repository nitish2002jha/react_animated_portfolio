import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
            data-aos-duration="1000"
      >
       <a href="https://www.instagram.com/nitish_jha80/profilecard/?igsh=cGh4Mmpob3gwcmFt" target="_blank" className="items">
        <FaInstagramSquare className='icons'/>
       </a>
       <a href="https://www.facebook.com/share/1GriT9kh3h/" target="_blank"className="items">
        <FaFacebook className='icons'/>
       </a>
       <a href="https://www.linkedin.com/in/nitish-jha-70952924a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

" target="_blank"className="items">
        <FaLinkedin className='icons'/>
       </a>
       <a href= "https://x.com/NitishJha9868?t=U05s-SMRgOvf2IJdIkAlWg&s=08" target="_blank" className="items">
        <FaSquareXTwitter className='icons'/>
       </a>
       <a href="https://github.com/nitish2002jha" target="_blank"className="items">
        <FaGithub className='icons' />
       </a>
          <a href="mailto:nkjha8391@gmail.com" target="_blank"className="items">
            <BiLogoGmail className='icons'/>
          </a>
          
      </div>
    </div>
    
    </>
  )
}

export default Contact