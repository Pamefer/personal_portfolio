import React from 'react'
import Navbar from './components/Navbar';
import AboutMe from './containers/AboutMe/AboutMe';
import Header from './containers/Header/Header';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header />
        <AboutMe />
    </div>
  )
}

export default App