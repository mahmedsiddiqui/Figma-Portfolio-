import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <nav>
        <div>
            <ul>
                <Link className='link' to="/" >Home</Link>
                <Link className='link' to="/casetudies" >Case Studies </Link>
                <Link className='link' to="/testimonial" >Testimonials</Link>
                <Link className='link' to="/recentwork"  >Recent Works</Link>
                <Link className='link' to="/getintouch" >Get in touch</Link>
            </ul>
        </div>
        <div className='icons'  >
            <div><a  className='icon' href="#"><FaLinkedin/></a></div>
            <div><a  className='icon' href="https://github.com/mahmedsiddiqui"><FaGithub/></a></div>
            <div><a  className='icon' href="https://www.instagram.com/accounts/onetap/?next=%2F"><FaInstagram/></a></div>


            
        </div>
     </nav>


   








    </>
  )
}

export default Navbar