import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
