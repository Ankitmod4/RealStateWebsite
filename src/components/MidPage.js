import React from 'react'
import "./Midpage.css"
import img1 from "../photo/equinix.png"
import img2 from "../photo/prologis.png"
import img3 from "../photo/realty.png"
import img4 from "../photo/tower.png"
const MidPage = () => {  
  return ( 
   
      <div className='mot'>
      <img src={img1}  className="az"  alt="" /> 
      <img src={img2} className="az" alt="" />
      <img src={img3} className="az" alt="" />
      <img src={img4} className="az" alt="" />
      </div>
    
      
  )
}

export default MidPage
