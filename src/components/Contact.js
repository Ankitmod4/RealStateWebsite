import React from 'react'
import './contact.css'
import contact from '../photo/contact.jpg'
import { MdCall, MdMessage } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {HiChat, HiChatBubbleBottomCenter} from 'react-icons/hi'
const Contact = () => {
    return (
      <section id='contact' >
            <div className='qw'>
                {/* {LEFT SIDE} */}
                <div className='left gh' style={{color:'black'}}>
                    <div className='our'>Our Contacts</div>
                    <div className='our ui'>Easy To Contact Us</div>
                    <div className='too '>We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better</div>
                    <div>
                        <section className='sec'>
                            <div className='we'> 
                            <div className='if ws'>
                                <span className='md' style={{ color: 'black', padding: '30px' }}>
                                    <MdCall className='md' size={30}  />
                                </span>
                               
                                    <span style={{ color: 'black' }}> Call  </span>
                                <div className='ty' style={{ color: 'black' }}>+1213432082</div>
                                    <br />
                                <div className='button'>
                                    <button className='bt'>CALL NOW</button>
                                    </div>
                                    
                            </div>
                            <div className='if ws'>
                                <span className='md' style={{ color: 'black', padding: '30px' }}>
                                    <BsFillChatDotsFill className='md' size={30}  />
                                </span>
                               
                                    <span style={{ color: 'black' }}> Video call </span>
                                <div className='ty' style={{ color: 'black' }}>+1213432082</div>
                                    <br />
                                <div className='button'>
                                    <button className='bt'>VIDEO CALL NOW</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='we'>
                            <div className='if ws'>
                                <span className='md' style={{ color: 'black', padding: '30px' }}>
                                    <HiChat className='md' size={30}  />
                                </span>
                               
                                    <span style={{ color: 'black' }}> Chat </span>
                                <div className='ty' style={{ color: 'black' }}>+1213432082</div>
                                    <br />
                                <div className='button'>
                                    <button className='bt'>CHAT NOW</button>
                                    </div>
                                    
                            </div>
                            <div className='if ws'>
                                <span className='md' style={{ color: 'black', padding: '30px' }}>
                                    <MdMessage className='md' size={30}  />
                                </span>
                               
                                    <span style={{ color: 'black' }}> Message  </span>
                                <div className='ty' style={{ color: 'black' }}>+1213432082</div>
                                    <br />
                                <div className='button'>
                                    <button className='bt'>MESSAGE NOW</button>
                                    </div>
                                    
                            </div>
                            </div>
                         </section>

                       </div>
                   
                    
                </div>


                {/* {RIGHT SIDE} */}
                <div>
                  <img src={contact} className='kos' alt="" />
                </div>
            </div>
            </section>
  )
}

export default Contact
