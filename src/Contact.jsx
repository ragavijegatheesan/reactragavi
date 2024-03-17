// src/pages/Contact.js
import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='page contact'>
      
      <span className='heading'>Contact me</span>
     
    
<div className='contactpno'>
<p><span> <FaPhone/></span>+91 6381178867</p>
<p><span>   <FaMailBulk/></span>ragavijegathesan@gmail.com</p>
 <a href='https://www.linkedin.com/in/ragavi-j-8517601b2/'><FaLinkedinIn/></a>

</div>



    </div>
  );
};

export default Contact;
