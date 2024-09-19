import React from 'react'
import {FaTwitter ,FaInstagram ,FaLinkedinIn ,FaGithub} from 'react-icons/fa';
import './footer.css';


function Footer ()  {
  return (
   <footer className='footer'>
    <div className="footer__container container grid">
    <div className="footer__socials">
            <a href="https://x.com/Shubhan39443298" className="footer__social-link" target='_blank'>
                <FaTwitter/>
            </a>

            <a href="https://www.instagram.com/___shubhhh____/" className="footer__social-link" target='_blank'>
                <FaInstagram/>
            </a>

            <a href="https://www.linkedin.com/in/shubhanshu-chaubey-596612237/" className="footer__social-link" target='_blank'>
                <FaLinkedinIn/>
            </a>

            <a href="https://github.com/shubhanshu2003" className="header__social-link" target='_blank'>
                <FaGithub/>
            </a>
        </div>

        <p className="footer__copyright text-cs"> &copy; 2024
            <span>PORTFOLIO</span>All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">Developed by
            <span>SHUBHANSHUCHAUBEY</span>
        </p>

    </div>
   </footer>
  )
}

export default Footer