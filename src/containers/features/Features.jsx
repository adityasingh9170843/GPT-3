import React from 'react'
import './features.css'
function Features() {

    const features = [
      {
        title: 'Improving end distrusts instantly',
        description: 'From they fine john he give of rich he. They age and draw rages like. Risks alone fear Fevr the minus ten years'
      },
      {
        title: 'Become the tended active',
        description: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
      },
      {
        title: 'Message or am nothing',
        description: 'Led asking about best cover give me not hills like. Secure active living depend son repipe police staff.'
      },
      {
        title: 'Really boy law county',
        description: 'Led asking about best cover give me not hills like. Secure active living depend son repipe police staff.'
      }
    ]
    
  return (
    <div className='feature section-padding obj-width'>
      <div className="feature-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='feature-container'>
        {features.map((feature, index) => (
          <div className='feature-item' key={index}>
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features