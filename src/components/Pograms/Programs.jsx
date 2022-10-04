import React from 'react';
import "./Programs.css";
import {programsData} from "../../data/programsData";


const Programs = () => {
  return (
    <div className='programs' id='programs'>
        {/*header*/}
        <div className='programs_headers'>
        <span className='stroke-text'>Explour Our</span>
        <span >Programs</span>
        <span className='stroke-text'>to shape you</span>

        </div>
    <div className='program-categories'>
        {programsData.map((program)=>(
            <div className='categories'>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <span className='join-now'>Join Now</span>
               
            </div>
        ))}
    </div>
       
    </div>
  )
}

export default Programs