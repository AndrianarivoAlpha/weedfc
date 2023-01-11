import React, {  } from 'react'
import ReactPlayer from 'react-player'
import { IoIosFootball } from 'react-icons/io'



const Galleries = () => {
  
  const sliders = [
    "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/slider%2FIMG_2.HEIC?alt=media&token=a41a6d4e-cd92-46b5-8bf0-73d0dda68c4f",
    "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/slider%2FIMG_3.HEIC?alt=media&token=b918a326-cdb4-481a-8f49-267ff7da99a4",
    "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/slider%2FIMG_5.HEIC?alt=media&token=df9f968d-f536-401a-ad1e-a1b944a1c81f",
    "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/slider%2FIMG_7.HEIC?alt=media&token=82765c8e-b7e4-4617-bfc3-e44e05a07072"
  ]
  
  return (
    <div className='galleries-div' id='galleries-div'>
      <div className="title-div">
        <IoIosFootball style={{
          fontSize: "4rem",
          color: "white"
        }}/>
        <h1>Des nouvelles</h1>
      </div>
        <div className="galleries">
          <div className="videos-div">
            <div className="video-text-div">
              <br />
              <p className="video-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque, ratione mollitia hic quidem rerum quod sint tenetur in voluptates?
              </p>
            </div>
            <ReactPlayer 
              url='https://youtu.be/5r71Oy_WG5g'
              width="100%"
            />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad accusantium dolore odit porro maxime voluptates, eveniet ea sunt consequatur corporis molestiae? Officia, nulla? Atque facilis deleniti architecto natus? Iure?</p>
          <button className='btn-plus'>Plus des videos</button>
          <div className="photos-div">
            <div className="photo-album">
              {
                sliders.map((slide, i) => {
                  return (
                    <div className="photo-slides" key={slide[i]}>
                      <img src={slide} alt="" className='slide-image'/>
                    </div>
                    
                  )
                })
              }
            </div>
            <div className="photo-btn-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint ullam. Autem deleniti iste reiciendis est, doloribus veniam nulla recusandae.</p>
              <button className='btn-plus' >Plus des photos</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Galleries