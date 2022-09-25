import React from 'react'

function MobileNavBar() {

  return (
    <div className="mobile-nav" id="mobile-nav">
        <div className="container">
            <div  className="mobile-nav-menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
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
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar