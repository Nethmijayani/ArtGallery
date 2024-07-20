import React, { useRef, useState } from 'react'
import imageData from '../Components/imageData';

import { Form } from 'react-bootstrap';

const Gallery = () => {

  const[searchTerm, setSearchTerm] =useState('');

  const handleSearch = (event)=>{
   setSearchTerm(event.target.value);
 };

  const filteredData =imageData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  
  return (
    <div className="p-4">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      className="mb-4 p-2 border border-gray-300 rounded w-full"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredData.map(item => (
        <div key={item.id} className="border p-1 rounded shadow justify-center hover:bg-transparent">
          <img src={item.url}  className="w-full h-auto justify-center rounded" />
          
        </div>
      ))}
    </div>
  </div>
    
  )
}
  


export default Gallery
