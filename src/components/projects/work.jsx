import React, { useEffect, useState } from 'react';
import { projectData, projectsNav } from './ProjectsData';
import WorkItems from './workItems';

const Work = ({setDetails, setshowDetails}) => {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);    

    const detailspage = (item) => {
    const detailsData = ([{item}]);
    const itemDetails = detailsData[0]['item']
        console.log(itemDetails);
        setDetails(itemDetails)
        setshowDetails(true)
  };

    useEffect(() => {
        if (item.name === 'All') {
            setProjects(projectData);
        } else {
            const newProjects = projectData.filter((project) => {
                return project.cat === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index); 
    };

    return (
        <>
            <div className="work-filters"  data-aos="zoom-in">
                {projectsNav.map((navItem, index) => {
                    return (
                        <div
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`work-items ${active === index ? 'active' : ''}`} d
                            key={index}
                        >
                            {navItem.name}
                        </div>
                    );
                })}
            </div>
            <div className="work-container">
                {projects.map((project) => {
                    return <WorkItems item={project} key={project.id} detailspage={detailspage} />;
                })}
            </div>
        </>
    );
};

export default Work;
