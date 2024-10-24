import Home from './Pages/Home';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
