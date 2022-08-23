import React from 'react'
import {
    GrFacebook,
    GrInstagram
} from 'react-icons/gr'
import {
    IoLogoYoutube
} from 'react-icons/io'

const SocialMedia = () => {
  return (
    <div className='social-media-div'>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <GrFacebook style={{
                color:"#4267B2",
                fontSize: "2rem",
                marginRight: "10px"
            }}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <GrInstagram style={{
                color:"#833AB4",
                fontSize: "2rem",
                marginRight: "10px"
            }}/>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <IoLogoYoutube style={{
                color:"#FF0000",
                fontSize: "2rem"
            }}/>
        </a>
    </div>
  )
}

export default SocialMedia