import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About'
import Home from  './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Signup/>
    <Contact/>
    </div>
  );
}

export default App;
