
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { createContext, useState } from 'react';


const App = () => {
  const[mode, setMode] = useState('light');
  
  return (
    <>
    
     <Navbar mode={mode}/>
     <div className="container my-3">
     <TextForm heading="Enter the text to Analize below :"/> 
     {/*<About/> */}
     </div>

     
    </>

  );
}

export default App