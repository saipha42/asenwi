import React from 'react'

function MobileNavBar({toggleNavBar}) {

  return (
    <div className="mobile-nav" id="mobile-nav">
        <div className="container">
            <div  className="mobile-nav-menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={toggleNavBar} href="#section-home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={toggleNavBar} href="#section-service">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={toggleNavBar} href="#section-testimonial">Testimonials</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " onClick={toggleNavBar} href='#section-faq'>Faq</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={toggleNavBar} href="#section-portfolio" >Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " onClick={toggleNavBar} href='#section-contact'>Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar