import React from 'react'
import Image from 'next/image';
import logoImg from 'public/images/logo.png';
import MobileNavBar from './mobileNavbar';

function Navbar() {
    function collapse(){
        let nav=  document.getElementById('mobile-nav');
        let navicon = document.getElementById('navbar-toggler-icon');
  
        if(nav.classList.contains('show-menu')){
          //on close menu
          nav.classList.remove('show-menu');
          navicon.classList.remove('bi-x');
          navicon.classList.add('bi-list');
        }else{
          //on open menu
          nav.classList.add('show-menu');
          navicon.classList.add('bi-x');
          navicon.classList.remove('bi-list');
        }
        
      }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">
                <Image src={logoImg} alt="logo" />
            </a>
            <button id="navbar-toggler" className="navbar-toggler" type="button" onClick={collapse} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i id="navbar-toggler-icon" className="bi bi-list"></i>
            </button>
            <div className=" navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Testimonials</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link ">Faq</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ">Contact</a>
                </li>
                </ul>
                <button type="button" className="rounded-pill call-btn">+959 696369146
                <span>
                    <i className="fas fa-phone-alt"></i>
                </span>
                </button>
            </div>
            </div>
        </nav>
        <MobileNavBar/>
    </>
  )
}

export default Navbar