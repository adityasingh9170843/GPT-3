import React from 'react'
import './possiblity.css'
import possibilityImage from '../../assets/possibility.png'
function Possiblity() {
  return (
    <div className="possibility section-padding obj-width">
      <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
          <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possiblity