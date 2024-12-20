import React from 'react'
import { IoClose } from "react-icons/io5";
import './showdetails.css'

const ShowProject = ({showDetails, details ,setshowDetails}) => {
    const closePage = () => {
        setshowDetails(false)
    };
  return (
    <>
    {
    showDetails?
    <>
     <div className="show-wrapper">
        
      <div className="projects-details">  
      <div onClick={()=>closePage()}><IoClose /></div>

        <div className="projects-details-container">
          <div className="project-details-img">
            <img src={details.img} alt={details.title} className="project-details-img" />
          </div>
          <div className="projects-details-info">
            <h2>{details.title}</h2>
            <h3>Technologies: {details.tec}</h3>
            <p>{details.desc}</p>
          </div>
          <div className="work-card-foot">
              <a className="project-demo" href={details.demo}>Demo <i class="uil uil-link"></i></a> 
              <a className="project-code" href={details.code}>GitHub <i class="uil uil-github-alt"></i></a>
          </div> 
        </div>
      </div>
    </div>
    </>
    :
    null
   }
    </>
  )
}

export default ShowProject