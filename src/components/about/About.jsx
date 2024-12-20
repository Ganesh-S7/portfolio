import React from 'react';
import './about.css';

const About = ({theme}) => {
  return (
    <>
    <section className="about-section wrapper" id="about">
        <div className="about-head">
          <div className="about-title-head" data-aos="zoom-in-down">
            <h2>About Me</h2>
            <h4>My Interduction</h4>
          </div>          
        </div>
        <div className="about-container">
            <div className="about-left" data-aos='fade-right'>
              <div className="about-pic">
                <img src={theme===`light`?"../img/pro.jpg" : "../img/pro-dark.jpg"} alt="user pic" />
              </div>
            </div>
            <div className="about-right" data-aos='fade-left'>
                <div className="about-box-container">
                  <div className="about-box">
                    <i className="bx bx-award"></i>
                    <h3 className="about-title">Experience</h3>
                    <p className='about-subtitle'>Freasher</p>
                  </div>
                  <div className="about-box">
                    <i className="bx bx-briefcase-alt"></i>
                    <h3 className="about-title">Completed</h3>
                    <p className='about-subtitle'>9+ Projects</p>
                  </div>
                  <div className="about-box">
                    <i className="bx bx-support"></i>
                    <h3 className="about-title">Support</h3>
                    <p className='about-subtitle'>Online 24/7</p>
                  </div>
                </div> 
              <div className="about-desc">
                <h3>I'm a passionate Frontend Web Developer, with a keen interest in creating intuitive, engaging user interfaces. I've honed my skills in HTML, CSS, JavaScript, Bootstrap, React, Git, and GitHub, and completed over 9 projects. Armed with a certificate in Frontend Web Development from Udemy, I continuously expand my knowledge and tackle new challenges. I'm eager to bring my creativity and technical expertise to impactful web development.</h3>  
              </div> 
              <div className='cv-button'>
                        <a href="../Ganesh-S-Resume.pdf" download className="download-cv-button"> Download CV <i class="uil uil-import"></i></a>
                    </div>                          
            </div>
        </div>
    </section>
    </>
  )
}

export default About