import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//card-action creates a bit of a footer for the cards

const ProjectDetails= (props) => {
    console.log(props);
    // const id = props.match.params.id; //to get the id from the routing info 
    const { project } = props;
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>16th March, 7am</div>
                        </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container center">
                <p>Loading Project....</p>
            </div>
        )
    }
    
}
//state here is the state of the rootReducer i.e the store
const mapStateToProps = (state, ownProps) =>{
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects' }
    ])
)(ProjectDetails);