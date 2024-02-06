import React from 'react'
import './Header.css';
import profile from '../../constants/images/9.png';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper_info'>
        <p className='p__cormorant-header'>I'm Pamela Guamán</p>
        <h1 className='app__header'>Software Engineer</h1>
        <p className='p__opensans_link_bold'><b><a target='_blank' rel="noreferrer" href="www.linkedin.com/in/pammefer/">linkedin.com/in/pammefer/</a></b></p>

      </div>
      <div className='app__wrapper_img'>
        <img src={profile} alt="pamela" className='my-image__img' />
      </div>

    </div>
  )
}

export default Header