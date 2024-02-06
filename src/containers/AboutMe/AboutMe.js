import React, { useEffect, useState } from 'react'
import './AboutMe.css';

const AboutMe = () => {
  const [yearsExperience, setYearsExperience] = useState(1);
  useEffect(() => {
    getYear();
  }, [])

  const getYear = () => {
    const INIT_WORK = 2018;
    let actualYear = new Date().getFullYear();
    setYearsExperience(actualYear - INIT_WORK)
  }


  return (
    <div className='app__aboutus app__wrapper_column flex__center section__padding' id="about">

      <p className='p__cormorant app__aboutus-p-tittle'>Frontend, Backend, Consultant Developer </p>

      <p className='p__opensans'>I am highly skilled in software development and stakeholder management</p>
      <div className='about_container' >
        <div className='aboutleft'>
          <p className='p__opensans_aboutme'>With over {yearsExperience} years of experience creating bold, future-focused technical solutions with the best software practices.</p>
          <p className='p__opensans_aboutme'>As a consultant I have managed to maintain solid relationships with people outside the development team, clients and other stakeholders by managing clear business communication.</p>
        </div>
        <div className='aboutright'>
          <p className='p__opensans_aboutme'>I have worked in agile, inclusive and autonomous collaborative teams.</p>
          <p className='p__opensans_aboutme'>Seeking and giving feedback has been essential for my professional and team growth.</p>
        </div>
      </div>

    </div>
  )
}

export default AboutMe