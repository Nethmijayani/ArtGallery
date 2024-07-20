import React from 'react'
import aboutImg from "../assets/about.jpeg"
import {useNavigate} from "react-router-dom"

const About = () => {
 
  

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto" id='about'>
     <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md-w-1/2">
            <img src={aboutImg} alt="" />
        </div>

        <div className="md-w-2/5">
            <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal ">We have been improving our quality of service <span>for many years</span></h2>
            <p className='text-tartiary text-lg mb-7'> some content</p>
            <button className="btn-primary" > View Gallery</button>
        </div>

     </div>
    </div>
  )
}

export default About
