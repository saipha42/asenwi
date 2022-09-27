import Image from 'next/image'
import React from 'react'
import  IntroImage from 'public/images/arts/intro.png';
import Script from 'next/script';
import 'glightbox/dist/css/glightbox.min.css';

function Intro() {
    
  return (
<section className="intro-section" id='section-home'>
<Script 
    src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"
    onReady={()=>{
        GLightbox({
            'href': 'https://youtu.be/eQIbuDVXZHA',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
        })
    }}
/>   
  <div className="container">
    <div className="row align-items-center text-white">
      <div className="col-md-6 intros">
        <h1 className="display-2">
          <span className="display-2--intro">Hey! I am Sai Marn Pha</span>
          <span className="display-2--desc lh-base">
            this is a multi-purpose responsive layout created with bootstrap v5. (here your can place your description text)
          </span>
        </h1>
        <button type="button"  className="rounded-pill call-btn">Get in touch
          <span><i className="fas fa-arrow-right"></i></span>
        </button>
      </div>

  
      <div className="col-md-6 intros text-end">
        <div className="video-box">
          <Image src={IntroImage}  className="img-fluid" alt="Art svg" />
          <a href="#"  className="glightbox position-absolute top-50 start-50 translate-middle">
            <span>
              <i className="fas fa-play-circle"></i>
            </span>
            <span className="border-animation pulse-1"></span>
            <span className="border-animation pulse-2"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,186.7C672,192,768,256,864,261.3C960,267,1056,213,1152,208C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>
)
}

export default Intro