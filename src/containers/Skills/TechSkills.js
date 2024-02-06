import React, { useEffect, useState } from 'react'
import './Skills.css';
import skills from '../../constants/data/skills.json'

const TechSkills = () => {

  const [techSkills, setTechSkills] = useState(skills.technical)

  useEffect(() => {
    setTechSkills(skills.technical)

  }, [])

  return (
    <div className='app__skills section__padding' id="skills">
      <div className='app__skills-block'>
        <h1 className='app__skills-p-tittle p__cormorant'>Technical Skills</h1>
        <ul className='app__skills-list tech-skills'>
          {
            techSkills.map((skill, i) =>
              <li className='tech-item p__opensans' key={i}>{skill.name}</li>
            )
          }
        </ul>
      </div>

    </div>
  )
}

export default TechSkills