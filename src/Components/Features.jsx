import React from "react";

const Features = () => {
  return (
    <div className="my-24 md:px-14 max-w-screen-2xl mx-auto" id="feature">
      <div className=" flex  flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-black font-bold  mb-3">
            Why to choose us
          </h3>
          <p className="text-base text-blue-400">some content</p>
        </div>

        {/*featured cards*/}
        <div className="w-full lg-w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div
              className="bg-indigo-200 rounded-[35px] h-56 shadow-3xl
                p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div>
                <h5 className="text-3xl font-semibolt text-primary px-5 text-center ">
                  Low pricing
                </h5>
              </div>
            
          </div>

          <div
            className="bg-indigo-200 rounded-[35px] h-56 shadow-3xl
                p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
          >
            <div>
              <h5 className="text-3xl font semibolt text-primary px-5 text-center ">
                Quality Drawings
              </h5>
            </div>
          </div>

          <div
            className="bg-indigo-200 rounded-[35px] h-56 shadow-3xl
                p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
          >
            <div>
              <h5 className="text-3xl font semibold text-primary px-5 text-center ">
               promotion bundles
              </h5>
            </div>
          </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Features;
