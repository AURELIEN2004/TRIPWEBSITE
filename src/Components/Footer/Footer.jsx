import React from 'react'
import './footer.scss'
import { ImFacebook } from 'react-icons/im';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';



const Footer = () => {
return (
  <div className='footer'>
    <div className='secContainer container grid'>
      <div className='logoDiv'>

        <div className='footerLogo'>
          <a href='#' className='logo flex'>
            <h1 className='flex'><MdOutlineTravelExplore className='icon' />
              Dot
            </h1>
          </a>
        </div>
        <div className='socials flex'>
          <ImFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>
    
      </div>

    <div className="footerLinks">
      <span className="linkTitle">
        Informations
      </span>
      <li>
        <a href="/">Home</a>
      </li>
            <li>
        <a href="/">Explore</a>
      </li>
            <li>
        <a href="/">Travel</a>
      </li>
            <li>
        <a href="/">Blog</a>
      </li>
    </div>


    <div className="footerLinks">
      <span className="linkTitle">
        Contact Us
      </span>
       <span className='phone'>+455565577777</span>
       <span className='email'>eren@gmail.com</span>
    </div>

    </div>
  </div>
)

}

export default Footer
