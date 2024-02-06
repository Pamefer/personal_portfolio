import React, { useEffect, useState } from 'react'
import './Skills.css';
import skills from '../../constants/data/skills.json'
import cleanCode from '../../constants/images/cleancode.png';

const PracticeSkills = () => {

  const [practicesSkills, setPracticesSkills] = useState(skills.technical)

  useEffect(() => {
    setPracticesSkills(skills.practices)

  }, [])

  return (
    <div className='app__skills section__padding' id="skills">
      <div className='app__wrapper-skills '>
        <div>
          <h1 className='app__skills-p-tittle p__cormorant'>Good Practices & Techniques</h1>
          <ul className='app__skills-list'>
            {
              practicesSkills.map((skill, i) =>
                <li className='p__opensans' key={i}>{skill.name}</li>
              )
            }
          </ul>
        </div>
        <div className='app__skills_img'>
          <img src={cleanCode} alt="cleancode" className='clean-code__img' />
        </div>
      </div>
    </div>
  )
}

export default PracticeSkills