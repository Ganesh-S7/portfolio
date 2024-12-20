import React from 'react'

const WorkItems = ({item, detailspage}) => {
  return (
    <>
    <div className="work-card" key={item.id} data-aos="zoom-in-up">
    <div className="card">
    <div class="image-container" onClick={()=>detailspage(item)}>
      <img src={item.img} alt={item.title} className="project-img" />
      <div class="overlay">
       <p class="overlay-text">View Project <i class="uil uil-eye"></i></p>
      </div>
    </div>
    </div>
        <h3 className="project-title" onClick={()=>detailspage(item)}>{item.title}</h3>    
        <h5 className='project-tech'>Technologies: {item.tec}</h5> 
        <div className="work-card-foot">
            <a className="project-demo" href={item.demo} target="_blank" rel='noreferrer'>Demo <i class="uil uil-link"></i></a> 
            <a className="project-code" href={item.code} target="_blank" rel='noreferrer'>GitHub <i class="uil uil-github-alt"></i></a>
        </div>  
    </div>
    </>
  )
}

export default WorkItems