import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <>
    <section className="skills-section wrapper" id="skills">
        <div className="skills-head">
           <div className="skills-head-container" data-aos="zoom-in-down">
            <h3>Skills</h3>
            <p>My technical level</p>
           </div>
        </div>
        <div className="skills-container" data-aos="zoom-out-up">
            <div className="skills-box-container">
                <div className="skills-box">
                <i class='bx bxl-html5 html'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>     
                        <h3 className="skills-title">HTML</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-css3 css'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>            
                        <h3 className="skills-title">CSS</h3>
                    </div>
                        <p className='skills-subtitle'>Advanced</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-bootstrap bs' ></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Bootstrap</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-meta mui'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Material UI</h3>
                    </div>
                        <p className='skills-subtitle'>Basic</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-javascript js'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">JavaScript</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                <div className="skills-box">
                <i class="uil uil-server api"></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">RESTful APIs</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-react rjs' ></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">React</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-redux rdx'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Redux</h3>
                    </div>
                        <p className='skills-subtitle'>Basic</p>
                </div>
                <div className="skills-box">
                <i class='bx bxl-git git'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Git/GitHub</h3>
                    </div>
                        <p className='skills-subtitle'>Basic</p>
                </div>
                <div className="skills-box">
                <i class="uil uil-desktop rwd"></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Responsive</h3>
                    </div>
                        <p className='skills-subtitle'>intermediate</p>
                </div>
                
                <div className="skills-box">
                <i class='bx bx-check-shield jst'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Jest & RTL</h3>
                    </div>
                        <p className='skills-subtitle'>Basic</p>
                </div>               
                <div className="skills-box">
                <i class='bx bxl-figma uiux'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">UI/UX Principles</h3>
                    </div>
                        <p className='skills-subtitle'>Basic</p>
                </div>
            </div>
        </div>
        <div className="skills-head">
           <div className="skills-head-container" id='soft-skills-head' data-aos="zoom-in-down">
            <p>My soft skills</p>
           </div>
        </div>
        <div className="skills-container">
            <div className="soft-box-container"  data-aos="zoom-out-up">
                <div className="skills-box">
                <i class="uil uil-bag soft"></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Work ethic</h3>
                    </div>                        
                </div>
                <div className="skills-box">
                <i class='bx bx-chat soft'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>            
                        <h3 className="skills-title">Communication</h3>
                    </div>                        
                </div>
                <div className="skills-box">
                <i class="uil uil-constructor soft"></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Ledarship</h3>
                    </div>                        
                </div>
                <div className="skills-box">
                <i class='bx bx-brain soft' ></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Creativity</h3>
                    </div>                        
                </div>
                <div className="skills-box">
                <i class='bx bx-group soft' ></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Teamwork</h3>
                    </div>                        
                </div>
                <div className="skills-box">
                <i class='bx bx-happy-beaming soft'></i>
                    <div className="skills-group">                        
                        <i class='bx bxs-badge-check'></i>
                        <h3 className="skills-title">Empathy</h3>
                    </div>                        
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills