import React from 'react'

const Pricing = () => {

    const packages =[
      {name : "Free" , monthlyPrice:"$0" , description: "Limited accesses for some content..."},
      {name :"Advanced", monthlyPrice: "$10" , description: "content"},
      {name :"Premium", monthlyPrice: "$20" , description: "content"},
      
    ]



  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>
        <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Our Plans</h2>

        </div>

        <div className="grid sm-grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
          {
            packages.map((pkg, index)=>
            <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
              <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
              <p className="text-tartiary text-center my-5">{pkg.description}</p>
              <p className="mt-5 text-center text-bold text-secondary text-4xl ">{pkg.monthlyPrice}</p>

              <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className='btn-primary' >Let's Start</button>
              </div>
            </div>)
          }
        </div>
    </div>
      
   
  )
}

export default Pricing
