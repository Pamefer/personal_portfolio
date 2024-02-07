import React, { useEffect, useState } from 'react'
import './Experience.css';
import experienceData from 'constants/data/projects';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [showBlock, setShowBlock] = useState({ state: false, index: null });

  useEffect(() => {
    setExperience(experienceData)
  }, [])

  const handleShowBlock = (value) => {
    setShowBlock((prevShowBlock) => ({
      state: !prevShowBlock.state,
      index: value,
    }));
  };
  return (
    <div className='app__aboutus app__wrapper_column flex__center section__padding' id="experience">

      <div className='container_experience'>
        {experience.map((e, eNum) => (
          <div key={eNum}>
            <div className='block_experience' onClick={() => handleShowBlock(eNum)}>
              <b><p className='p__opensans_aboutme other'><b><a target='_blank' rel="noreferrer" href={e.web}>{e.company}</a></b></p></b>
              <p className='p__opensans_aboutme'>{e.date}</p>
              <div className='titles_container'>
                {e.titles.map((title, num) =>
                  (<p className='p__opensans_aboutme_bold' style={{ fontWeight: '900' }} key={num}>{title}</p>)
                )}
              </div >

            </div>

            {showBlock.state && showBlock.index === eNum && (
              <div className='product_container'>
                {e.product.flatMap((p, i) =>
                (<><p key={`product_${i}_name`} className='p__opensans_aboutme_bold light_rose' style={{ fontWeight: '900' }}>
                  {p.name}
                </p>
                  <div className='list_description'>
                    {p.description.map((d, j) => (
                      <p key={`product_${i}_description_${j}`} className='p__opensans_aboutme_bold' style={{ fontWeight: '900' }}>
                        {d}
                      </p>
                    ))}
                  </div>
                  <br /></>))}
              </div>)}
          </div>
        ))}
      </div>

    </div >
  )
}

export default Experience