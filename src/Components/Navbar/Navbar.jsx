import React, {useState} from 'react'
import './navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {
  // pour ouvruir la navbar
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar ')
  }
  // pour fermer la navbar
   const removeNav = ()=>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <div className="header">

        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className='flex'><MdOutlineTravelExplore className='icon' />
                 Dot
             </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navlists flex">

            <li className="navItem">
              <a href="/" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">Products</a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">Contact</a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex"> 
              <button className="btn loginBtn">
                <a href="/" className="btnLink">Login</a>
              </button>

              <button className="btn">
                <a href="/" className="btnLink">Sign Up</a>
              </button>
            </div>

          </ul> 

          <div onClick={removeNav} className="closeNavbar">
            <IoCloseCircleSharp className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          < TbGridDots className="icon"/>
        </div>
        
      </div>
    </section>
  )
}

export default Navbar
