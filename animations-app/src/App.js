import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BarChart from './Chart/BarChart';
import Tree from './Tree/Tree';
import data from './Tree/data';
import Scene from './Sphere/Scene';

import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";

function App() {

  const { width, height } = useViewportSize();
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to='/' style={{ padding: 5 }}>
          Home
        </Link>
        <Link to='/chart' style={{ padding: 5 }}>
          Bar Chart Animation
        </Link>
        <Link to='/tree' style={{ padding: 5 }}>
          Collapsible Tree Animation
        </Link>
        <Link to='/sphere' style={{ padding: 5 }}>
          Vertex Sphere
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<BarChart />} />
        <Route path='/tree' element={<Tree data={data} width={600} height={500} />} />
        <Route path='/sphere' element={
          <Canvas width={width} height={height}>
            <Scene />
          </Canvas>
        } />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Click Nav Menus to display animations. <br></br> (Vertex Sphere - WIP)</p>
    </div>
  );
}

export default App;