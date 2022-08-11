
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Business from './pages/Business';
import Navbar from './components/layout/Navbar';
import HeaderComponent from './components/layout/HeaderComponent';
import Footer from './components/layout/Footer';

function App() {

   
  return (
    <Router>
      <HeaderComponent />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
