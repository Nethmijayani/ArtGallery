import React, { useState } from 'react'
//import imageData from '../Components/imageData';

const Gallery = () => {

  /*const[searchTerm, setSearchTerm] =useState('');

  const handleSearch = (event)=>{
    setSearchTerm(event.target.valuwe);
  };

  const filteredData =imageData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
*/

  return (
    <div className='p-4'>
      <input 
      type='text'
      placeholder= "Search"
      value={searchTerm}
      onChange={handleSearch}
      className='mb-4 p-2 border border-gray-500 rounded w-full'
      />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map(item => (
          <div key={item.id} className="border p-2 rounded shadow">
            <img src={item.url} alt={item.title} className="w-full h-auto rounded" />
            <p className="mt-2 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Gallery
