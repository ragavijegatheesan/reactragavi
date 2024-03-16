// src/components/Home.js
import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
 
      {/* Add more raindrops as needed */}
      <h2>Hi, I am <span>Ragavi Jegathesan</span> </h2>
      <p>I am a frontend web developer. I can provide clean code and pixel perfect design. <br></br>
        I also make website more & more interactive with web animations.</p>
        <button className='more'>More About Me</button>
    </div>
  );
};

export default Home;

