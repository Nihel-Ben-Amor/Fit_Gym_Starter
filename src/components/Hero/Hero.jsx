import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_pic from "../../assets/hero_pic.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from"../../assets/calories.png";
import {motion} from 'framer-motion' 
import { type } from '@testing-library/user-event/dist/type';



const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768 ?  true : false;
  return (
    <div className='Hero'>
      <div className='blur blur-hero'></div>
       
        <div className='left-h'>
            <Header/>
            {/*the best add */}
            <div className='the-best-add'>
              <motion.div
              initial={{left:mobile?'178px':'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}
              ></motion.div>
              <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        
            </div>
             {/*Hero heading */}
          <div className='text-hero'>
            <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span></div>
            <div>
            <span>Ideal Body</span></div>
             <div>
            <span>In here we will help you to shape and build your ideal body and 
                live up your life to fullest
            </span></div>
          </div>
          {/* figures */}
          <div className='figures'>
            <div> 
              <span>+140</span>
              <span>Expert coachs</span>
            </div>
            <div>
              <span>+987 </span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>Fitness Programs</span>
            </div>
          </div>
          {/*buttons */
          }
          <div className='hero-buttons'>
            <button className='btn'>Get Started
            
            </button>
            <button className='btn'>Learn More</button>

          </div>
         
           
         
        </div>
        <div className='left-r'>
          <button className='btn'>join Now</button>
        <motion.div 
         initial={{right:'-1rem'}}
         whileInView={{right:'4rem'}}
         transition={transition}
        className='heart-rate'>
            <img src={Heart} alt=''></img>
            <span>Heart Rate</span>
            <span>116 bmp</span>

          </motion.div>
           {/* hero images*/}
        <img src={hero_pic} alt='' className='hero_image'></img>
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}
         src={hero_image_back} alt='' className='hero_image_back'></motion.img>
            {/* calorie images*/}

        <div className='calories'>

              <img  src={calories} alt="" ></img>
              
              
              <span>Calories Burned</span><span>220 kcal</span>
        </div>

            
            
            
       

        </div>
       
        
    </div>
  )
}

export default Hero