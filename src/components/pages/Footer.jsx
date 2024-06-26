import React from 'react'
import {Link} from 'react-router-dom'

import githublogo from '../../assets/social/github.png';
import instalogo from '../../assets/social/insta.png';
import linkedinlogo from '../../assets/social/linkedin.png';
import whatsapplogo from '../../assets/social/whatsapp.png';
import twitterlogo from '../../assets/social/twitter.png';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    
    return (
        <>
            <footer>
                <div className='logo'>SAILENDRA CHETTRI</div>
                <p>Living, learning, & leveling up one day at a time.</p>
                <div className="icons">
                    <Link to="https://twitter.com/sailendrz" target="_blank"><img src={twitterlogo}
                        alt="Twitter" /></Link>
                    <Link to="https://www.instagram.com/01_sailendra" target="_blank"><img src={instalogo}
                        alt="Instagram" /></Link>
                    <Link to="https://www.linkedin.com/in/sailendrachettri/" target="_blank"><img
                        src={linkedinlogo} alt="LinkedIn" /></Link>
                    <Link to="https://github.com/sailendrachettri/" target="_blank"><img src={githublogo}
                        alt="Github" /></Link>
                    <Link to=" https://wa.me/9832795894?text=Hi%20I%20Saw%20Your%20Portfolio!" target="_blank"><img
                        src={whatsapplogo} alt="whatsapp" /></Link>
                </div>
                <div className="copyright">
                    Copyright &copy; <span className="year">{year}</span>. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer