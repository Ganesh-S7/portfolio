import React from 'react'
import './education.css'

const Education = () => {
  return (
    <>
    <section className="education-section wrapper" id="education">
        <div className="education-head">
            <div className="skills-head-title" data-aos="zoom-in-down">
                <h3>Qualification</h3>
            </div>           
        </div>
        <div className="education-container">
            <div className="education-title" data-aos="fade-up">
                <i class="uil uil-graduation-cap"></i>
                <h3>Education</h3>
            </div>
            <div className="education-journey">
                <div className="education-sections">
                    <div className="education-data">                        
                        <div className='edu-box'  data-aos="fade-right">
                            <h3 className='education_title'>Frontend Web Development</h3>
                            <p className="education-subtitle">Udemy - Online</p>                                        
                            <div className="education-calendar">
                                <i className="uil uil-calendar-alt">2024 - 2024</i>
                            </div>
                        </div>
                        <div>
                            <div className="education-rounder"></div>
                            <div className="education-line"></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="education-data">  
                        <div></div> 
                        <div >
                            <div className="education-rounder"></div>
                            <div className="education-line"></div>
                        </div>                     
                        <div className='edu-box' data-aos="fade-left">
                            <h3 className='education_title'>Bachelor of Computer Application(BCA)</h3>
                            <p className="education-subtitle">UG Nrupathubga University - Bengaluru</p>                                        
                            <div className="education-calendar">
                                <i className="uil uil-calendar-alt">2021 - 2024</i>
                            </div>
                        </div>
                        
                    </div>
                    <div className="education-data">                        
                        <div className='edu-box' data-aos="fade-right">
                            <h3 className='education_title'>PCMCs</h3>
                            <p className="education-subtitle">Vivekananda PU College - Bengaluru</p>                                        
                            <div className="education-calendar">
                                <i className="uil uil-calendar-alt">2020 - 2021</i>
                            </div>
                        </div>
                        <div>
                            <div className="education-rounder"></div>
                            <div className="education-line"></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="education-data">  
                        <div></div>  
                        <div>
                            <div className="education-rounder"></div>
                            {/* <div className="education-line"></div> */}
                        </div>                    
                        <div className='edu-box' data-aos="fade-left"  data-aos-anchor-placement="center-bottom">
                            <h3 className='education_title'>SSLC</h3>
                            <p className="education-subtitle">Sringari Sharadha School - Bengaluru</p>                                        
                            <div className="education-calendar">
                                <i className="uil uil-calendar-alt">2018 - 2019</i>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Education