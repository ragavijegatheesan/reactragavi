
import React from 'react'
import './Skills.css'

export const Skills = () => {
  return (
    <div className='SkillContainer page'> 
      <h3>My Skills</h3>
    <div className='hr'></div>
   <div className='About_container'>
  <div className='Card'>
     <div className='content'>
     <h2>Frontend</h2>
       <ul>
       <li>Html</li>
        <li>CSS</li>
        <li>Bootsrap</li>
        <li>JS</li>
        <li>Reactjs</li>          
      </ul>
   </div>
    <div className='imgbx'><img src={require('./s4.png')} alt=""></img></div>
    <div className='textbx'><h2>Frontend</h2></div>
  </div>
  <div className='Card'>
     <div className='content'>
      <h2>Backend</h2>
      <ul>
      <li>PHP</li>
        <li>MYSQL</li> 
      </ul>

     </div>
    <div className='imgbx'>
      <img src={require('./s4.png')} alt=""></img>
    </div>
    <div className='textbx'>
    <h2>Backend</h2>
       <ul>
           
      </ul>
    </div>
  </div>
  <div className='Card'>
     <div className='content'>
     <h2>Framework</h2>
       <ul>
        <li>Wordpress</li>
        <li>Shopify</li>           
      </ul>

     </div>
    <div className='imgbx'><img src={require('./s4.png')} alt=""></img></div>
    <div className='textbx'><h2>Framework</h2></div>
  </div>
  </div></div>
  )
}
