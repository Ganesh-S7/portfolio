import React from 'react';
import './home.css';
// import imgs from '../../../public/img/user.jpg'

const Home = () => {   
  return (
    <>
    <section className='home-section' id='home'>
        <div className='home-container'>
            <div className="left-home" data-aos='fade-down-right'  data-aos-anchor-placement="top-bottom">
                <div className="home-details">
                    <div className="welcome">
                        <h4>Welcome to my portfolio</h4>
                    </div>
                    <div className='main-intro'>
                        <h1>Hi! I'm Ganesh S</h1>
                        <h3 class="typing-loop">Frontend Web Developer</h3>
                        <h2>based in Bengaluru. I thrive on new challenges, continuously expanding my skill set and staying up-to-date with the latest industry trends. Let's build something amazing together!</h2>
                    </div> 
                    <div className='social-media'>
                        <a href="https://www.instagram.com/ig_ganesh.s/" className="insta" target="_blank" rel='noreferrer'><i class="uil uil-instagram"></i></a>
                        <a href="https://github.com/Ganesh-S7" className="git" target="_blank" rel='noreferrer'><i class="uil uil-github-alt"></i></a>
                        <a href="https://www.linkedin.com/in/ganesh-s07/" className="linkdin" target="_blank" rel='noreferrer'><i class="uil uil-linkedin-alt"></i></a>
                    </div>                      
                </div>
            </div>
            <div className="right-home" data-aos='fade-down-left'>
                <div className='profile-pic'>
                    <img src="../img/pro2.webp"  alt="user pic" />
                </div>
            </div>
        </div>
        <div className="scroll-down-button">
            <div className="scroll-down">
                <i class="uil uil-mouse-alt mouse" ></i> scroll down<i class='bx bx-down-arrow-alt arrow-down'></i>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home