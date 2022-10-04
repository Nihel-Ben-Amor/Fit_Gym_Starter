import React from 'react'
import "./Reason.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"

import image4 from "../../assets/image4.jpg"
import tick from "../../assets/tick.png"
import adidas from "../../assets/adidas.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"



const Reason = () => {
  return (
    <div className='reason' id='reason'>
        <div className='left'>
            <img src={image1}></img>
            <img src={image2}></img>
         
         
          
            <img src={image4}></img>
           
            
        </div>
        <div className='right'>
          <span>Some reasons</span>
          <div>
            <span className='stroke-text'>why </span>
            <span> choose us ?</span>
          </div>
          <div className='details-r'>
            <div>
              <img src={tick} alt=""></img>
              <span>OVER 140 EXPERT CHOACHS</span>
            </div>
            <div>
            <img src={tick}></img>
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
            <img src={tick}></img>
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
            <img src={tick}></img>
              <span>RELIABLE PARTNERS</span>
            </div>

          </div>
          <span style={{color:"var(--gray)",fontWeight:"normal",}}>Our partners</span>
          <div className='partners'>
            <img src={nike} alt=""></img>
            <img src={adidas} alt=""></img>
            <img src={nb} alt=""></img>

          </div>
        
        </div>
    
       


    </div>
  )
}

export default Reason