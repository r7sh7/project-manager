import React from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
//dahsboard is our own class used to style as per our needs 
//div(row) to use the materialize grid
//div(col s12 m6) 12 columns with small screens and up and 6 columns for medium screens and up
//offset-m1 is the gap between the two divs 1)Project List 2)Notifications
const Dashboard = () => {
    return (  
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6"><ProjectList /></div>
                <div className="col s12 m5 offset-m1"><Notifications /></div>
            </div>
        </div>
    );
}
 
export default Dashboard;