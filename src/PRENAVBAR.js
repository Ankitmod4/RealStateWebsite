import React from 'react'
import ".//components/prenavbar.css"
import logo from "./photo/logo.png"


import CountUp from 'react-countup';
import { Link } from 'react-scroll';
 
const PRENAVBAR = () => {
    
    return (  
      < div id='media' className='media'> 
        
        <div className='j'>   
        <div className='log'> 
          <img src={logo} className='abs' alt="" /> 
          </div> 
        <div className='k'>
            <Link className='link' activeClass="active" to="Residencies" spy={true} smooth={true} offset={-70} duration={500}><li>Residencies</li> </Link>
            
            <Link className='link links'  activeClass="active" to="Value" spy={true} smooth={true} offset={-70} duration={500}><li> OurValue</li> </Link>
            
            <Link className='link' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000} ><li>ContactUs </li> </Link>
            <Link className='link' activeClass="active" to="Started" spy={true} smooth={true} offset={-70} duration={1000}><li>GetStarted</li></Link>
 
            <button className='contact'>CONTACT</button>
            
          </div>
          
        </div>
         {/* LEFT SIDE */} 
        <div className='toy'>
          <div className='wr'>
            <h1 className='tossed'>DISCOVER <br />  MOST SUITABLE <br /> PROPERTY</h1> 
          
            <h3>Find a varity of properties that suits you very Easily</h3><br />
              <h3>Forget All difficulties in finding a residence for you</h3><br />
              <div className='bot'
              >
              <div className='l'>
              
              <input className='input' type="text" />
              
                  <button className='contact frag'>SEARCH </button>
                  
              </div>
              
              
            </div>
              <span className='o'>
              <span>
                <CountUp className='i' start={8000} end={9000} duration={4} />
                <span className='i'>+</span>
              <p className='t' >Premium Products</p>
                
              </span>
              <span>
              <CountUp className='i' start={1000} end={2000} duration={4} />
              <span className='i'>+</span>
                <p className='t'>Happy Customers</p>
              </span>
              <span>
              <CountUp className='i'  end={28} duration={4} />
              <span className='i'>+</span>
              <p className='t'>Award Winnings</p>
              </span>
              </span>
          </div>
          
            
         
          
            {/* RIGHT SIDE */}
          <div className='om'>
            <img src="https://real-estate-web.pages.dev/hero-image.png" className='hero' alt="" />
            </div>
        </div>
        
      </div>
  )
}

export default PRENAVBAR
