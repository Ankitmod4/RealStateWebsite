import PRENAVBAR from './PRENAVBAR';
import MidPage from './components/MidPage';
import './App.css';
import Residencies from './components/Residencies';
import Value from './components/Value';
import 'react-accessible-accordion/dist/fancy-example.css';
import Contact from './components/Contact';
import GetStarted from './components/GetStarted';    
import Information from './components/Information';
import { Link, animateScroll as scroll } from "react-scroll";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() { 
  return (  
     
    <> 
       
    {/* <BrowserRouter> */}
      <PRENAVBAR />
       <MidPage />
       <Residencies />
       <Value />
       <Contact /> 
         <GetStarted />
       <Information />    
      

        {/* <Routes>  */}
          {/* <Route to='/contact' element={<Contact />} />  
          <Route to='Residencies' element={<Residencies />} />
          <Route to='/value' element={<Value />} />
          <Route to='/started' element={< GetStarted/>} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      
      
    </>
   
    
  );
} 

export default App;


