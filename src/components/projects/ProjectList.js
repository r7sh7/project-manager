import React from 'react';
import ProjectSummary from './ProjectSummary';
//section is to give a little space around the actual div 
//z-depth-0 for no shadow to the card 
//Since copy pasting the below code is not a very good approad we make a new project summary component and use that to display ///as many summaries as we need thus making it more modular
/* <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title</span>
                <p>Posted by rishi</p>
                <p className="grey-text">16th March, 7am</p>
                </div>
            </div> */

const ProjectList = ({projects}) => {
    return (  
        <div className="project-list section">
            {projects && projects.map((project) => {
                 return(
                    <ProjectSummary project={project} key={project.id} />
                 )   
            })}
        </div>
        
    );
}
 
export default ProjectList;