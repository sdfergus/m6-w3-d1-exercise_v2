import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BarChart from './Chart/BarChart';

function App() {

  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to='/' style={{ padding: 5 }}>
          Home
        </Link>
        <Link to='/chart' style={{ padding: 5 }}>
          Bar Chart Animation
        </Link>
        {/* <Link to='/tree' style={{ padding: 5 }}>
          Collapsible Tree Animation
        </Link>
        <Link to='/sphere' style={{ padding: 5 }}>
          Vertex Sphere
        </Link> */}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<BarChart />} />
        {/* <Route path='/tree' element={<Tree />} />
        <Route path='/sphere' element={<Sphere />} /> */}
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Click Nav Menus to display animations</p>
    </div>
  );
}

export default App;