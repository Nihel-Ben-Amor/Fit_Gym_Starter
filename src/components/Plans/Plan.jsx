import React from 'react'
import "./Plan.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plan = () => {
  return (
    <div className='plan-container'>
      <div className='blur blur-plan1'></div>
      <div className='blur blur-plan'></div>
      <div className='programs_headers'>
        <span className='stroke-text'>Ready to start</span>
        <span>Your journey </span>
        <span className='stroke-text'> Now with US</span>
      </div>
      {/*plans card */}
      <div className='plans'>
        {plansData.map((plan,i)=>(
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className='features'>
              {plan.features.map((features,i)=>(
                <div className='features'>
                  <img src={whiteTick} alt=""></img>
                  <span key={i}>{features}</span>
                  </div>
              ))}
            </div>
            <div>
              <span>see more benefits ->

              </span></div>
            <button className='btn'>join Now</button>
            

        

      </div>
    
  ))}
  </div>
  </div>
  )
              }

export default Plan