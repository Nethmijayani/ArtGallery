import React from "react";
import "./Navbar.jsx";
import BannerImg from "../assets/BannerImg.png"

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20"id="home">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 ">
        <div>
            <img src={BannerImg} alt=""  className="lg:h-[386px]"/>
        </div>

        {/*banner content */}
        <div className="md:w-4/5 space-y-4">
            <h2 className="md:text-6xl text-3xl font-bold text-white mb-2">Take a look at newly desigened creative Art collection</h2>
            <p className="text-2xl mb-8">some content should add</p>
          <div className=" space-x-5 space-y-4">
          <button className="btn-primary">Get Started</button>
          <button className="btn-primary">Discount</button>
        </div>
        </div>
        </div>  
      </div>
    </div>
  );
};

export default Home;
