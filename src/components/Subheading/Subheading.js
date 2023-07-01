import React from 'react'
const Subheading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
        <p className='p__cormorant'>{title}</p>
        {/* <img src={profile} alt="my-image" className='my-image__img'/> */}
    </div>
  )
}

export default Subheading