import React from 'react'
import 'swiper/css'; 
import 'swiper/css/navigation';  
import 'swiper/css/pagination'; 
// import im from '../photo/r1.png'
import './Residencies.css' 
import { Swiper, SwiperSlide } from 'swiper/react'  
import data from './slider.json' 
import { SliderSettings } from './Common';
const Residencies = () => {
  return (  
      <div id='Residencies'  > 
         
          {/* <img src={im} alt="" /> */}
            
              
                  
              <span className='choice'>
                 Best Choices  
              </span>
              <h1 className='popular'>
                  Popular Residencies 
                
                      </h1> 
                      
                  <Swiper {...SliderSettings}  >  
                      { 
                          data.map((card,i) => (
                              <SwiperSlide key={i}> 
                                  <div className='flex'>
                                      {/* <h1 style={{color:'blueviolet'}}>hii This is the beautiful picture i made</h1> */}
                                  <div className='top'>  
                                      <img className='tyu' width={260} style={{ color:"red"}} src={card.image } alt="HELLO" />
                                      <h2 className='map'>{ card.price}</h2>
                                          <h1 className='map'>{card.name }</h1>
                                          <h3 className='map'>{card.detail  }</h3>
                                      
                               </div>
                                    
                                  </div>  
                                  
                </SwiperSlide>
                               
                          )
                          ) 
                      }
                      </Swiper>
                      
                      
              
    </div>  
  )
}

export default Residencies





