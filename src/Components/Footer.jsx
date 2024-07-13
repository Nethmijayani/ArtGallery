import React from 'react'
import Logo from "../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#290151] md:px-14 p-2 max-w-screen-2xl mx-auto text-white">
      <div className="my-8 flex flex-col md:flex-row gap-6 ">
        <div className=" space-y-4">
            <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">ArtGallery</span></a>

            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
       
        <div>
          <input type="email" name="name" id="email" placeholder='Your email' 
          className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none "/>
          <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white
           hover:text-primary duration-300 transition-all " />

        </div>

        <div className="flex items-center space-x-1">
    <FaFacebook className='w-10 cursor-pointer hover:translate-y-2 transition-all' />
    <FaInstagram className='w-10 cursor-pointer hover:translate-y-2 transition-all'/>
    </div>
      </div>
</div>
  <hr />

  <div className="item-center justify-center my-2 " >
    <p>ArtGallery---2024. Allrights Recieved</p>
    
  </div>
</div>
  )
}

export default Footer
