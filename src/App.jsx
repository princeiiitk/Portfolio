import Home from './Pages/Home';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import
import ProjectShowcase from './Pages/ProjectShowcase';
import Education from './Pages/Education';
import CurrentWork from './Pages/CurrentWork';
import SkillShowcase from './Pages/SkillShowcase';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Project />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/ProjectShowcase/:id' element={<ProjectShowcase />} />
           <Route path='/SkillShowcase/:id' element={<SkillShowcase/>} />
          <Route path='/Education' element={<Education />} />
          <Route path='/CurrentWork' element={<CurrentWork />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
