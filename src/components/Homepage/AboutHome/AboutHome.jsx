import React from 'react'
import { Link } from 'react-router-dom'

const AboutHome = () => {
  return (
    <main id="about-section" className="row pt-3">
      <div className="col-md-6 pb-3">
        <div className="about-us">
          <h2 className="pb-3">
            About STAR ORGANIC
          </h2>
          <p>
            On 9 September in 2013, Developing Agriculture and Consulting
            Environment Co., Ltd (STAR ORGANIC CO.,LTD) was founded by two
            co-founders who graduated from Vietnam National University of
            Agriculture I. STAR ORGANIC is a company specializing in the production
            of organic spices.
          </p>
          <Link to ={'/about'}>
          <button  
            className="btn btn-green text-nowrap"
            style={{ maxWidth: 300 }}
          >
            About us
          </button>
          </Link>
       
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="videos">
          <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/teflafm2yQk?si=6D2G10dpS2Lwa4bz"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
      </div>
    </main>

  )
}

export default AboutHome
