import React from 'react'
import Galleries from '../Galleries/Galleries'
import landingMainImg from '../images/landing.jpg'
import Newsletter from '../Newsletter/Newsletter'
import SocialMedia from '../SocialMedia/SocialMedia'
import Teams from '../Teams/Teams'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className='landing-div'>
        <div className="landing-main">
          <img src={landingMainImg} alt="" />
        </div>
        <div className="landing-text">
          <p>Tongasoa</p>
          <h1>
            WEED FOOT-BALL CLUB
          </h1>
        </div>
      </div>

      <SocialMedia />
          
      <Galleries />

      <Teams />

      <Newsletter />
    </div>
    
  )
}

export default LandingPage