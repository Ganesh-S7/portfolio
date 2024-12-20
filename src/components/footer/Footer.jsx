import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer-section" id="footer" data-aos="fade-up">
    <div className="skills-head" >
           <div className="skills-head-container">
            <h3>Ganesh S</h3>           
           </div>
        </div>
      <div className="footer-container"  >
        <div className="footer-nav">
          <ul className="footer-main-nav">
            <li className="footer-nav-item"><a href="#about" className="footer-nav-link">About</a></li>
            <li className="footer-nav-item"><a href="#projects" className="footer-nav-link">Projects</a></li>
            <li className="footer-nav-item"><a href="#skills" className="footer-nav-link">Skills</a></li>
          </ul>
        </div>
        <div className="footer-media-container">
          <a className="footer-media insta" href="https://www.instagram.com/ig_ganesh.s/" target="_blank" rel='noreferrer'><i class="uil uil-instagram"></i></a>        
          <a className="footer-media linkdin" href="https://www.linkedin.com/in/ganesh-s07/" target="_blank" rel='noreferrer'><i class="uil uil-linkedin-alt"></i></a>
          <a className="footer-media git" href="https://github.com/Ganesh-S7" target="_blank" rel='noreferrer'><i class="uil uil-github-alt"></i></a>        
        </div>
        <div className="footer-copy">
          <h4 className="copyright"> &copy;Ganesh S.  All rights reserved </h4>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer