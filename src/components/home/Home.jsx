import React from 'react';
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import {FaTwitter ,FaInstagram ,FaLinkedinIn ,FaGithub} from 'react-icons/fa';
import CV from "../../assets/Shubhanshu-Chaubey-Resume.pdf"
import './home.css'; 
const home = () => {
  return (
    <section className='home' id='home'>
       <div className="home__wrapper">
       <div className="home__container container">
        <p className="home__subtitle text-cs">
            Hello,<span> My Name Is</span>
        </p>

        <h1 className="home__title text-cs"><span>Shubhanshu<br/>
            </span> Chaubey</h1>

        <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
        </p>

        <div className="home__img-wrapper"> 
            <div className="home__banner">
                <img src={profileImg} alt=""  className='home__profile'/>
            </div>

            <p className="home__data home__data-one">
               <span className="text-lg">
                2<b>+</b>
                </span> 

                <span className="text-sm text-cs">
                Months of <span>Experience</span>
                </span> 
            </p>


            <p className="home__data home__data-two">
               <span className="text-lg">
                10<b>+</b>
                </span> 

                <span className="text-sm text-cs">
                 Completed <span> Projects</span>
                </span> 
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />


        
        </div>
        
        <p className="home__text"> Who loves working with Java and web technologies like ReactJS, ExpressJS, JavaScript, SQL and manymore. I enjoy building apps that are both functional and easy to use. During my time as an intern at Amatres Technologies, I got to help develop their website, which was a great learning experience. I’m always excited to pick up new skills and stay updated with the latest tech trends.</p>
        
        <div className="home__socials">
            <a href="https://x.com/Shubhan39443298" className="home__social-link" target='_blank'>
                <FaTwitter/>
            </a>

            <a href="https://www.instagram.com/___shubhhh____/" className="home__social-link" target='_blank'>
                <FaInstagram/>
            </a>

            <a href="https://www.linkedin.com/in/shubhanshu-chaubey-596612237/" className="home__social-link" target='_blank'>
                <FaLinkedinIn/>
            </a>

            <a href="https://github.com/shubhanshu2003" className="header__social-link" target='_blank'>
                <FaGithub/>
            </a>
        </div>
        <div className="home__btns">
            <a download='' href={CV} className="btn text-cs">Download Resume</a>
        <a href="#skills" className="hero__link text-cs">My Skills

        </a>
        </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
       </div>


       <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
       </div>
    </section>
  )
}
export default home