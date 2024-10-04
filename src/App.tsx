import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Characters from './components/Characters'; 
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link> 
            </li>
            <li>
              <p>CLANES</p>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
