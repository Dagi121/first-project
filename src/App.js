import React from 'react'

import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
// import Goal from './Tutorials/conditinals';
// import Garage from './Tutorials/lists';
//import Forms from './Tutorials/formsofclass';
import Formfunction from './Tutorials/formoffunction';
import Contacus from './pages/Contacus';
import About from './pages/About';
//import Garage from './Tutorials/conditinals';
// import Car from './Tutorials/class_components';
// import Container from './Tutorials/render';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to = "/">Home</Link>
          <Link to = "/Contactus">Contact</Link>
          <Link to = "/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contacus />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="*" element={<p>page not found</p>} /> */}
        </Routes>
      </Router>
    



    {/* <Goal isGoal={false} />
    <Garage /> */}
    {/* <Forms /> */}
    <Formfunction />
    </div>
  );
}

export default App;