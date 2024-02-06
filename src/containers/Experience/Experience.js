import React, { useEffect, useState } from 'react'
import './Experience.css';
import experienceData from 'constants/data/projects';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    setExperience(experienceData)
  }, [])

  return (
    <div className='app__aboutus app__wrapper_column flex__center section__padding' id="experience">

      <div className='container_experience'>
        {experience.map((e, eNum) => (
          <div key={eNum}>
            <a className='block_experience' href={"a.com"}>
              <p className='p__opensans_aboutme'><b><a target='_blank' rel="noreferrer" href={e.web}>{e.company}</a></b></p>
              <p className='p__opensans_aboutme'>{e.date}</p>
              <div className='titles_container'>
                {e.titles.map((title, num) => (
                  <p className='p__opensans_aboutme_bold other' style={{ fontWeight: '900' }} key={num}>{title}</p>
                ))}
              </div>
            </a>

            <div className='product_container'>
              <h3 className='p__opensans_project_bold'>Product:</h3>
              {e.product.description.map((p) =>
                <p className='p__opensans_aboutme_bold' style={{ fontWeight: '900' }} >{p}</p>

              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Experience