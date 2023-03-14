// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
import Navbar from "./components/pages/Navbar"
import Footer from './components/pages/Footer';

function App() {  
  return (
   
     <BrowserRouter>
      <Navbar/>
      <div className='body'>
      <Routes>
        <Route path="/portfolio" element={<Portfolio image=""/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="*" element={<About/>}/>
      </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
   
      
  );
}

export default App;
