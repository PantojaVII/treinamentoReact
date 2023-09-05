import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      {/* As rotas iniciam aqui */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* As rotas Finalizam aqui */}
      
      <Footer></Footer>
    
    </Router>

  );
}

export default App;
