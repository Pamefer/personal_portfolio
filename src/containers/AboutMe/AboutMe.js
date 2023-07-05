import React,{useEffect, useState} from 'react'
import './AboutMe.css';

const AboutMe = () => {
  const [yearsExperience, setYearsExperience]=useState(1);
  useEffect(() => {
    getYear();
  }, [])

  const getYear=()=>{
    const INIT_WORK=2018;
    let actualYear= new Date().getFullYear(); 
    setYearsExperience(actualYear-INIT_WORK)
  }

  
  return (
    <div className='app__aboutus app__wrapper_column flex__center section__padding' id="about">

        <p className='p__cormorant app__aboutus-p-tittle'>Frontend, Backend, Consultant </p>

        <p className='p__opensans'>I am highly skilled in software development and stakeholder management</p>
        <p className='p__opensans'>With over {yearsExperience} years of experience </p>
    </div>
  )
}

export default AboutMe