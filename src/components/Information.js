import React from 'react'
import logo from "../photo/logo2.png"
import './information.css'
const Information = () => {
  return (
    <div className='wc'>
          <div className='qs'>
              {/* {LEFT side} */}
              <img src="https://real-estate-web.pages.dev/logo2.png" alt="" />
              <p className='gh'>Our vision is to make all people <br />
the best place to live for them.</p>
          </div>
          {/* {RIGHT SIDE} */}
          <div className='ris'>
          <div className="js sd">INFORMATION</div> <br />
          <div className='js jsd'>145 New York, FL 5467, USA</div>
          
          </div>
          </div>
  )
}

export default Information
