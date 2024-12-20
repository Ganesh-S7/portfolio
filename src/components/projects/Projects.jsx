import React from 'react'
import './projects.css'
import Work from './work'

const Projects = ({setshowDetails, setDetails ,details}) => {
  

  return (
    <>   
    <section className="projects-section wrapper" id="projects">
        <div className="projects-container">
            <div className="Skills-head">
                <div className="skills-head-container" data-aos="zoom-in-down">
                    <h3>Projects</h3>
                </div>
            </div>
            <Work setshowDetails={setshowDetails} setDetails={setDetails} details={details} />
        </div>
    </section>
    </>
  )
}

export default Projects