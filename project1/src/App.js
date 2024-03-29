import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Aboutus from './Components/pages/Aboutus';
import Qualification from './Components/pages/Qualification';
import Experience from './Components/pages/Experience';
import Skills from './Components/pages/Skills';
import Hobbies from './Components/pages/Hobbies';
import Workshops from './Components/pages/Workshops';
import Projects from './Components/pages/Projects';
import Contactme from './Components/pages/Contactme';
import Certificates from './Components/pages/Certificates';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "Aboutus" element={<Aboutus/>}/>
        <Route path = "Qualification" element={<Qualification/>}/>
        <Route path = "Experience" element={<Experience/>}/>
        <Route path = "Skills" element={<Skills/>}/>
        <Route path = "Hobbies" element={<Hobbies/>}/>
        <Route path = "Certificates" element={<Certificates/>}/>
        <Route path = "Contactme" element={<Contactme/>}/>
        <Route path = "Projects" element={<Projects/>}/>
        <Route path = "Workshops" element={<Workshops/>}/>

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
