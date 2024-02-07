import React, { useEffect, useState } from 'react'
import './Experience.css';
import experienceData from 'constants/data/projects';
import { FaExternalLinkAlt } from "react-icons/fa";

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
              <div className='company'>
                <b><p className='p__opensans_aboutme other'>{e.company}</p></b>
                <a target='_blank' rel="noreferrer" href={e.web}><FaExternalLinkAlt color='#fff' fontSize={17} /></a>
              </div>
              <p className='p__opensans_aboutme'>{e.date}</p>
              <div className='titles_container'>
                {e.titles.map((title, num) =>
                  (<p className='p__opensans_aboutme_bold' style={{ fontWeight: '900' }} key={num}>{title}</p>)
                )}
              </div >

            </div>

            {showBlock.state && showBlock.index === eNum && (
              <div className='product_container'>
                {e.product.flatMap((item, i) =>
                (<>
                  <div className='project'>
                    <p key={`product_${i}_name`} className='p__opensans_aboutme_bold light_rose' style={{ fontWeight: '900' }}>
                      {item.name}
                    </p>
                    <a target='_blank' rel="noreferrer" href={item.web}><FaExternalLinkAlt color='#fff' fontSize={17} /></a>

                  </div>
                  <div className='list_description'>
                    {item.description.map((value_description, j) => (
                      <p key={`product_${i}_description_${j}`} className='p__opensans_aboutme_bold' style={{ fontWeight: '900' }}>
                        {value_description}
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