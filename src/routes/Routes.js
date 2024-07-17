import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Education from '../components/Education';

const AppRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Education />
    </Router>
  );
}

export default AppRoutes;
