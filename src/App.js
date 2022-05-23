import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Calculator from './pages/Calculator';
import About from './pages/About';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [expression,setExpression] = useState("0");

  

  const evaluateExpression = (e) =>
  {
    console.log("evaluateExpression")
  }

  const buttonPressed = (e) =>
  {
    let tempExpression = expression+e.target.getAttribute('value');
    
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Calculator buttonPressed={buttonPressed} expression={expression}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
