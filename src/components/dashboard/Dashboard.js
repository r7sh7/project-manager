import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

//dahsboard is our own class used to style as per our needs 
//div(row) to use the materialize grid
//div(col s12 m6) 12 columns with small screens and up and 6 columns for medium screens and up
//offset-m1 is the gap between the two divs 1)Project List 2)Notifications
const Dashboard = () => {

    useFirestoreConnect([
        {collection:'projects'}
    ])

    const projects = useSelector(state => {
        // console.log(state);
        return (state.firestore.ordered.projects);
    })
    // const projects = useSelector(state => {
    //     console.log(state);
    //     return state.project.projects;
    // });

    return (  
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6"><ProjectList projects={projects} /></div>
                <div className="col s12 m5 offset-m1"><Notifications /></div>
            </div>
        </div>
    );
}
 
export default Dashboard;