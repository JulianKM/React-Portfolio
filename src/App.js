import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/pages/about"
import Portfolio from "./components/pages/portfolio"
import Contact from "./components/pages/contact"
import Resume from "./components/pages/resume"
import Navbar from "./components/pages/navbar"
import Footer from './components/pages/footer';

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
