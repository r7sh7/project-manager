import React from 'react'
//card-action creates a bit of a footer for the cards

const ProjectDetails= (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi numquam eos cum eum quia quasi facilis, quos illo aliquid. Eaque sunt debitis voluptates unde aperiam perspiciatis et ab dolores.</p>
                </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by rishi</div>
                        <div>16th March, 7am</div>
                    </div>
            </div>
        </div>
    )
}

export default ProjectDetails;