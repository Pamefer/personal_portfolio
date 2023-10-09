import React,{useEffect, useState} from 'react'
import './Experience.css';

const experienceData=[
  {
    company: 'Thoughtworks',
    web:'https://www.thoughtworks.com/',
    date:'January 2019 – June 2023',
    tittles:['Software Engineer','Fullstack Developer','Consultant']
  },
  {
    company: 'IOET',
    web:'https://www.ioet.com/',
    date: 'September 2018 - December 2018',
    tittles: ['Software Engineer','Frontend Developer']
  },
  {
    company: 'University Tecnica Particular de Loja',
    web:'https://www.utpl.edu.ec/',
    date: 'January 2018 - April 2018',
    tittles: ['Software Engineer','Artificial Intelligence', 'Researcher']
  }
]

const Experience = () => {
  const [experience, setExperience]=useState([]);
  useEffect(()=>{
    setExperience(experienceData)
  },[])

  return (
    <div className='app__aboutus app__wrapper_column flex__center section__padding' id="experience">

      <div className='container_experience'>
        {experience.map((e, eNum)=>(
          <div key={eNum}>
            <p className='p__opensans_aboutme'><b><a href={e.web}>{e.company}</a></b></p>
            <p className='p__opensans_aboutme'>{e.date}</p>
            <div className='titles_container'>
              {e.tittles.map((title,num )=>(
                <p className='p__opensans_aboutme_bold' style={{fontWeight:'900'}} key={num}>{title}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default Experience