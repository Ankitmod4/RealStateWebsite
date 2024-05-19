import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading, 
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState 
} from 'react-accessible-accordion'
// import value from '../photo/value.png'
import data from './accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md' 
import './value.css' 
const Value = () => {
  return ( 
    <section id='Value'>
    <div className='to' >
        {/* for left side */}
        <div className='left'>
          <img src="	https://real-estate-web.pages.dev/value.png" style={{ border:'10px solid wheat', marginTop:'150px'}} className='hero' alt="" />
        </div>
        {/* {Right side } */}
        <div className='right'>
          <span className='our'>
            Our Value 
          </span>  <br /> <br />
          <h1 className='our' style={{color:'black'}} >Value We Give To You <br /> </h1><br />
          <h3 className='too'>We always ready to help by providijng the best services for you. <br />
We beleive a good blace to live can make your life better</h3>
          <Accordion>
            allowMultipleExpanded={false},
            preExpanded={[0]}
            {data.map((data,i) => {
              return (
                <AccordionItem   key={i} uuid={i}>
                  <AccordionItemHeading className='io'  >
                    <AccordionItemButton  className='ko' >
                      <div className='k ic '>{data.icon}</div>
                      <h1 className='k'>{data.heading}</h1>
                      <div className='k ic'><MdOutlineArrowDropDown size={20}/> </div>
                      
                     </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='k panel'>{data.detail }</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            }
            )}
          </Accordion>
        </div>
      </div>
      </section>
  )
}

export default Value
