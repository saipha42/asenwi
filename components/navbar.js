import React,{useEffect} from 'react'
import Image from 'next/image';
import logoImg from 'public/images/logo.png';
import MobileNavBar from './mobileNavbar';

function Navbar() {


    // useEffect(()=>{
    //     var nav=  document.getElementById('mobile-nav');
    //     let navicon = document.getElementById('navbar-toggler-icon');
        
    //     const togglerNavs = document.querySelectorAll('.nav-link-mobile-toggler');

    //     function toggleNavBar(){
    //         nav.classList.toggle('show-menu')
    //         navicon.classList.toggle('bi-list');
    //         navicon.classList.toggle('bi-x');
            
    //     }
    //     togglerNavs.forEach((toggleNav)=>{
    //         toggleNav.addEventListener('click',()=>{
    //             toggleNavBar();
    //         })
    //     })
    // },[])

    


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">
                <Image src={logoImg} alt="logo" />
            </a>
            <button id="navbar-toggler"  data-bs-toggle="collapse"  data-bs-target="#navbarNav" className="navbar-toggler navbar-toggler-button nav-link-mobile-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i id="navbar-toggler-icon" className="bi bi-list"></i>
            </button>
            <div className=" navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item"  >
                    <a className="nav-link active"
                    aria-current="page" href="#section-home">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#section-service">Services</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#section-testimonial">Testimonials</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link " href='#section-faq'>Faq</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#section-portfolio" >Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href='#section-contact'>Contact</a>
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
        <MobileNavBar  />
    </>
  )
}

export default Navbar