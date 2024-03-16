// src/pages/About.js
import React from 'react';
import './About.css';


const About = () => {

  const onButtonClick = () => {
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
       
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
               
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "ragaviresume.pdf";
          alink.click();
      });
  });
};

  return (
    <div className='about page'>
      <h2>About Me</h2>
      <div className='hr'>
        <div className='hr1'></div>
      </div>
   <div className='about-container-row'>
    <div className='about-clmn1'>
    <img className='aboutimg' alt="" src={require('./ragavi (2).png')} />
    </div>
    <div className='about-clmn2'>
    <h2>I am <span>Ragavi</span></h2>
             <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
<ul>
  <li><b>Full Name</b>     :  Ragavi Jegathesan</li>
  <li><b>Qualfication</b>  :  MCA</li>
  <li><b>Nationality</b>   :  Indian</li>
  <li><b>Freelance</b>     :  Available</li>
  <li><b>Role</b>          :  Web developer</li>
</ul>

<button className='more' onClick={onButtonClick}>
                    Download CV
                </button>
    
    </div>

           

   </div>
    </div>
  );
};

export default About;
