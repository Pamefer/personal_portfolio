import React from 'react'
import Navbar from './components/Navbar';
import AboutMe from './containers/AboutMe/AboutMe';
import Header from './containers/Header/Header';
import './App.css';
import PracticeSkills from 'containers/Skills/PracticeSkills';
import TechSkills from 'containers/Skills/TechSkills';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header />
        <AboutMe />
        <PracticeSkills />
        <TechSkills />
    </div>
  )
}

export default App