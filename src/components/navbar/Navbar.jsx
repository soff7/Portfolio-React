import React from 'react';
import { motion } from 'framer-motion'; 
import "./navbar.scss";
import Sidebar from './sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}  
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                initial={{ opacity: 0, scale:0.5 }} 
                animate={{ opacity: 1, scale:1 }} 
                transition={{duration: 0.5 }}
                > 
                Sofien Project 
                </motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/sofian.ladhari"><img src="/facebook.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/sofien_ldh/"><img src="/instagram.png" alt="Instagram" /></a>
                    <a href="https://www.ladharisofien0@gmail.com"><img src="Gmail.png" alt="Gmail" /></a>
                    <a href="https://github.com/soff7"><img src="/github.jpeg" alt="Github" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
